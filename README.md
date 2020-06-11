## Repository for source of [pinecoat.com](https://pinecoat.com)

This repository contains the source code for pinecoat.com -- a react based online shop for coats.

The folder `/frontend` contains the [react](https://reactjs.org/) app written in typescript and styled with [styled-components](https://styled-components.com/). It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so the scripts `yarn start`, `yarn test`, and `yarn build` can be used for development.

The folder `/paymentApi` contains python code for an AWS lambda function that communicates with [stripe](https://stripe.com). It is used to facilitate payments for orders placed in our online shop.

The folder `/infrastructure` contains an [AWS CDK](https://aws.amazon.com/cdk/) based app used to deploy the necessary infrastructure to AWS. It first creates deployment artifacts and then deploys the frontend as well as the payment API.

### Architecture

// TODO

### Deployment

Follow these steps to deploy the web app. Prerequisites are: an AWS account, a Stripe account, a machine with node, yarn, pip, aws-cli, and cdk (`npm install -g aws-cdk`) installed.
Note: to interact with the AWS via the CLI, a tool like [aws-vault](https://github.com/99designs/aws-vault) for the handling of session credentials is useful but not necessary.

- Create a public route53 hosted zone for the domain (in this case pinecoat.com) with the usual NS entries
- Request or import a TLS certificate for the domain in the AWS Certificate Manager (ACM). We need one in us-east-1 for the website that is delivered via cloudfront and one in the region where the payment API lambda will be deployed (in this case eu-west-1)
- TODO: create secret with stripe API key
- Bootstrap the AWS account to enable the use of CDK by executing `aws-vault exec <PROFILE> -- cdk bootstrap`.
- Add the domain name and the ARNs of the TLS certificates to the respective variables in `/infrastructure/infrastructure.ts`
- Finally, deploy the CDK stack by executing `npm install` and `aws-vault exec <PROFILE> -- cdk deploy` in the `/infrastructure` folder
