#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';

class CdkTestStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // infrastructure goes here
  }
}


const app = new cdk.App();
new CdkTestStack(app, 'CdkTestStack');
