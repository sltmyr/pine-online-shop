#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3deploy from '@aws-cdk/aws-s3-deployment';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as route53 from '@aws-cdk/aws-route53';
import * as targets from '@aws-cdk/aws-route53-targets';
import * as certificatemanager from '@aws-cdk/aws-certificatemanager';

const domainName = 'pinecoat.com'
const certificateArn = 'arn:aws:acm:us-east-1:678739632517:certificate/debfbe97-9f0e-4edf-ab6d-dd87da52ad73'

class HomepageStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: cdk.StackProps) {
    super(scope, id, props);
    const certificate = certificatemanager.Certificate.fromCertificateArn(this, 'Certificate', certificateArn);
    const zone = route53.HostedZone.fromLookup(this, 'HostedZone', { domainName });
    const aliases = [domainName, `www.${domainName}`];

    const s3BucketSource = new s3.Bucket(this, 'SourceBucket', {
      bucketName: domainName,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL
    });
    const logBucket = new s3.Bucket(this, 'LogBucket', {
      bucketName: 'pinecoat-logs',
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL
    });
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, 'OriginAccessIdentity', { comment: 'cloudfront-s3-access' })
    const distribution = new cloudfront.CloudFrontWebDistribution(this, 'CdnDistribution', {
      loggingConfig: { bucket: logBucket, prefix: 'cloudfront' },
      errorConfigurations: [
        { errorCode: 403, responseCode: 200, responsePagePath: '/index.html' },
        { errorCode: 404, responseCode: 200, responsePagePath: '/index.html' }
      ],
      originConfigs: [{
        s3OriginSource: { s3BucketSource, originAccessIdentity },
        behaviors: [{ isDefaultBehavior: true }],
      }],
      viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(
        certificate,
        { aliases },
      ),
    });
    aliases.map((alias, index) => new route53.ARecord(this, `aliasRecord${index}`, {
      recordName: alias,
      target: route53.AddressRecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      zone
    }));

    new s3deploy.BucketDeployment(this, 'DeployWithInvalidation', {
      sources: [s3deploy.Source.asset('../frontend/build/')],
      destinationBucket: s3BucketSource,
      distribution,
    });
  }
};

const app = new cdk.App();
new HomepageStack(app, 'HomepageStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
});
