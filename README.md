## Repository for [pinecoat.com](https://pinecoat.com)

This repository contains the code for pinecoat.com — our online shop for coats — currently still under construction.

The frontend is written in typescript and uses [gatsby](https://www.gatsbyjs.com/) to build an optimized react app. Styling is done via [styled-components](https://styled-components.com/). The code is contained in the folder `/frontend`.

The folder `/paymentApi` contains python code for an AWS lambda function that communicates with [stripe](https://stripe.com). It is used to facilitate payments for orders placed in our online shop.

The folder `/infrastructure` contains an [AWS CDK](https://aws.amazon.com/cdk/) based app used to deploy the necessary infrastructure to AWS. This stack is deployed via a simple github actions pipeline.

### Initial setup

Prerequisites:

- an AWS account,
- a [stripe](https://stripe.com) account,
- a [paypal](https://developer.paypal.com/home/) developer account
- a machine with node.js, pip, [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html), and cdk (`npm install -g aws-cdk`) installed.

Follow these steps to set up the AWS account for hosting our web app. Note: to interact with the AWS via the CLI, a tool like [aws-vault](https://github.com/99designs/aws-vault) for the handling of session credentials is useful (not necessary).

- Create a public route53 hosted zone for the domain (in this case pinecoat.com) with the usual NS entries.
- Request or import a TLS certificate for the domain in the AWS Certificate Manager (ACM). We need one in us-east-1 for the website that is delivered via cloudfront and one in the region where the payment API lambda will be deployed (in this case eu-west-1).
- Create a secret with AWS Secrets Manager called `stripeKeys` that contains your stripe API key.
- Add the `GATSBY_PAYPAL_CLIENT_ID` and `STRIPE_PUBLISHABLE_KEY` as secrets to github.
- Bootstrap the AWS account to enable the use of CDK by executing `aws-vault exec <PROFILE> -- cdk bootstrap`.
- Add the domain name and the ARNs of the TLS certificates to the respective variables in `/infrastructure/infrastructure.ts`
- create a technical user in the AWS account and store the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` as secrets in github. Make sure the user has the permissions to deploy all necessary resources.

### Deployments

After setting up the AWS account and the repository, any push to master will trigger the github action definded in `.github/workflows`. It first builds the frontend and backend artifacts and then deploys everything to AWS.

### Development

For development on your local machine, run `gatsby develop` in the `frontend` folder. For testing the stripe or paypal integration, create a `.env.development` and/or `.env.production` file in the `/frontend` folder that contain the stripe publishable API key and Paypal client ID.

### Note on copyright

Feel free to use the code or parts of it for your own project in accordance with the Apache 2.0 license. **The fonts are explicitly excluded. Either choose other fonts or purchase a license at [klim.co.nz](https://klim.co.nz)**
