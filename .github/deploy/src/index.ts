import { App } from '@aws-cdk/core';
import { getSubDomainName } from './helpers/helper';
import Stack from './stack';

if (!process.env.BRANCH_NAME) throw Error('A BRANCH_NAME must be provided...')
if (!process.env.DOMAIN_NAME) throw Error('A DOMAIN_NAME must be provided...')
if (!process.env.BASE_SUB_DOMAIN_NAME) throw Error('A BASE_SUB_DOMAIN_NAME must be provided...')

const branchName = process.env.BRANCH_NAME;

// e.g. tylangesmith.com
const domainName = process.env.DOMAIN_NAME;

// e.g. for master branches ==> blog
// e.g. for non-master branches ==> blog-<BRANCH_NAME>
const subDomainName = getSubDomainName({
  branchName,
  baseSubDomainName: process.env.BASE_SUB_DOMAIN_NAME
})

const app = new App()

new Stack(app, {
  stackName: `tylangesmith-${branchName}`,
  domainName,
  subDomainName,
  branchName,
  env: {
    // Need to pass these in to lookup the route53 hostedZone
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
})
