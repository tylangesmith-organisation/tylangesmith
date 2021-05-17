import { App } from '@aws-cdk/core';
import Stack from './stack';

const app = new App()
new Stack(app, {
  stackName: `tylangesmith-${process.env.BRANCH_NAME}`
})
