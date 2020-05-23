# Homepage for pinecoat.com

pinecoat.com is a simple online shop. The frontend is build with react and styled-components. Payments are handled via stripe and paypal integration. The infrastructure is deployed to AWS via CDK.

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and contains the usual scripts: `yarn start`, `yarn test`, and `yarn build`

To deploy with CDK, the AWS account needs to be bootstrapped: `aws-vault exec jan -- cdk bootstrap`.
