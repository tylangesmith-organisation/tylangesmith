import { App } from '@aws-cdk/core';
import Stack from './stack';

if (!process.env.BRANCH_NAME) throw Error('A BRANCH_NAME must be provided...')
if (!process.env.DOMAIN_NAME) throw Error('A DOMAIN_NAME must be provided...')
if (!process.env.SUB_DOMAIN_NAME) throw Error('A SUB_DOMAIN_NAME must be provided...')

const branchName = process.env.BRANCH_NAME;
const domainName = process.env.DOMAIN_NAME;
const subDomainName = branchName == 'master' ? `${process.env.SUB_DOMAIN_NAME}` : `${process.env.SUB_DOMAIN_NAME}-${branchName}`

const app = new App()

new Stack(app, {
  stackName: `tylangesmith-${process.env.BRANCH_NAME}`,
  domainName,
  subDomainName,
})
