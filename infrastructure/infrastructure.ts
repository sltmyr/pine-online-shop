#!/usr/bin/env node
import * as apigateway from "@aws-cdk/aws-apigateway";
import * as certificatemanager from "@aws-cdk/aws-certificatemanager";
import * as cloudfront from "@aws-cdk/aws-cloudfront";
import * as iam from "@aws-cdk/aws-iam";
import * as lambda from "@aws-cdk/aws-lambda";
import * as route53 from "@aws-cdk/aws-route53";
import * as targets from "@aws-cdk/aws-route53-targets";
import * as s3 from "@aws-cdk/aws-s3";
import * as s3deploy from "@aws-cdk/aws-s3-deployment";
import * as cdk from "@aws-cdk/core";

class WebAppStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    const domainName = "pinecoat.com";
    const paymentApiDomainName = `checkout.${domainName}`;
    const certificateArnUsEast =
      "arn:aws:acm:us-east-1:678739632517:certificate/debfbe97-9f0e-4edf-ab6d-dd87da52ad73";
    const certificateArnEuWest =
      "arn:aws:acm:eu-west-1:678739632517:certificate/124a607c-16eb-4b6e-9a93-7d4ae69180a7";
    const stripeSecretsArn =
      "arn:aws:secretsmanager:eu-west-1:678739632517:secret:stripeKeys-oGhpnr";

    const certificateUsEast = certificatemanager.Certificate.fromCertificateArn(
      this,
      "CertificateUsEast",
      certificateArnUsEast
    );
    const certificateEuWest = certificatemanager.Certificate.fromCertificateArn(
      this,
      "CertificateEuWest",
      certificateArnEuWest
    );
    const hostedZone = route53.HostedZone.fromLookup(this, "HostedZone", {
      domainName,
    });

    new Website(this, "Website", {
      domainName,
      certificate: certificateUsEast,
      hostedZone,
    });
    new PaymentApi(this, "PaymentApi", {
      domainName: paymentApiDomainName,
      certificate: certificateEuWest,
      hostedZone,
      stripeSecretsArn,
    });
  }
}

class Website extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: DomainProps) {
    super(scope, id);
    const { certificate, domainName, hostedZone } = props;
    const aliases = [domainName, `www.${domainName}`];
    const s3BucketSource = new s3.Bucket(this, "SourceBucket", {
      bucketName: domainName,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });
    const logBucket = new s3.Bucket(this, "LogBucket", {
      bucketName: `${domainName}-logs`,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "OriginAccessIdentity",
      { comment: "cloudfront-s3-access" }
    );
    const distribution = new cloudfront.CloudFrontWebDistribution(
      this,
      "CdnDistribution",
      {
        loggingConfig: { bucket: logBucket, prefix: "cloudfront" },
        errorConfigurations: [
          {
            errorCode: 403,
            responseCode: 200,
            responsePagePath: "/index.html",
          },
          {
            errorCode: 404,
            responseCode: 200,
            responsePagePath: "/index.html",
          },
        ],
        originConfigs: [
          {
            s3OriginSource: { s3BucketSource, originAccessIdentity },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
        viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(
          certificate,
          { aliases }
        ),
      }
    );
    aliases.map(
      (alias, index) =>
        new route53.ARecord(this, `aliasRecord${index}`, {
          recordName: alias,
          target: route53.AddressRecordTarget.fromAlias(
            new targets.CloudFrontTarget(distribution)
          ),
          zone: hostedZone,
        })
    );

    new s3deploy.BucketDeployment(this, "DeployWithInvalidation", {
      sources: [s3deploy.Source.asset("../frontend/public/")],
      destinationBucket: s3BucketSource,
      distribution,
    });
  }
}

class PaymentApi extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: ApiProps) {
    super(scope, id);
    const { certificate, domainName, hostedZone, stripeSecretsArn } = props;
    const layer = new lambda.LayerVersion(this, "paymentApiDependencies", {
      code: lambda.Code.fromAsset("../paymentApi/dependencies.zip"),
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_8],
    });
    const paymentApiLambda = new lambda.Function(this, "paymentApiLambda", {
      runtime: lambda.Runtime.PYTHON_3_8,
      handler: "payment_api.handler",
      code: lambda.Code.fromAsset("../paymentApi/build.zip"),
      layers: [layer],
    });
    paymentApiLambda.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ["secretsmanager:GetSecretValue"],
        resources: [stripeSecretsArn],
      })
    );
    const paymentApi = new apigateway.LambdaRestApi(this, "paymentApi", {
      handler: paymentApiLambda,
      proxy: false,
      domainName: {
        domainName: domainName,
        certificate: certificate,
      },
    });
    const paymentIntent = paymentApi.root.addResource("intent");
    paymentIntent.addMethod("GET");

    new route53.ARecord(this, `aliasRecordPaymentApi`, {
      recordName: domainName,
      target: route53.AddressRecordTarget.fromAlias(
        new targets.ApiGateway(paymentApi)
      ),
      zone: hostedZone,
    });
  }
}

type DomainProps = {
  certificate: certificatemanager.ICertificate;
  domainName: string;
  hostedZone: route53.IHostedZone;
};

interface ApiProps extends DomainProps {
  stripeSecretsArn: string;
}

const app = new cdk.App();
new WebAppStack(app, "WebAppStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
