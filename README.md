## Repository for source of [pinecoat.com](https://pinecoat.com)

This repository contains the source code for pinecoat.com -- a react based online shop for coats.

The folder `/frontend` contains the [react](https://reactjs.org/) app written in typescript and styled with [styled-components](https://styled-components.com/). It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and contains the usual scripts: `yarn start`, `yarn test`, and `yarn build`

The `/infrastructure` folder contains an [AWS CDK](https://aws.amazon.com/cdk/) based app used to deploy the necessary infrastructure to AWS.

### Deployment

Follow these steps to deploy the web app. Note: to interact with the AWS via the CLI, I use [aws-vault](https://github.com/99designs/aws-vault) for the handling of session credentials.

- Create a public route53 hosted zone for the domain (in my case pinecoat.com) with the usual NS entries
- Request or import a TLS certificate for the domain in the AWS Certificate Manager (ACM)
- Bootstrap the AWS account to enable the use of CDK by executing `aws-vault exec <PROFILE> -- cdk bootstrap`. This obviously requires cdk to be installed (`npm install -g aws-cdk`)
- Create a deployment package of the web app in the `/frontend` folder by executing `yarn build`
- Add the domain name and the ARN of the TLS certificate to `/infrastructure/infrastructure.ts`
- Finally, deploy the CDK stack by executing `npm install` and `aws-vault exec <PROFILE> -- cdk deploy` in the `/infrastructure` folder
