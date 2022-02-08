import { App } from '@aws-cdk/core'
import { getBranchedSubDomainName, getUrl, getStackName } from './helpers/helper'
import Stack from './stack'

if (!process.env.BRANCH_NAME) throw Error('A BRANCH_NAME must be provided...')
if (!process.env.DOMAIN_NAME) throw Error('A DOMAIN_NAME must be provided...')
if (process.env.SUBDOMAIN_NAME === undefined || process.env.SUBDOMAIN_NAME === null) throw Error('A SUBDOMAIN_NAME must be provided...')
if (!process.env.GITHUB_REPOSITORY) throw Error('A GITHUB_REPOSITORY must be provided...')

const branchedSubDomainName = getBranchedSubDomainName({
  branchName: process.env.BRANCH_NAME,
  subDomainName: process.env.SUBDOMAIN_NAME
})

const url = getUrl({
  domainName: process.env.DOMAIN_NAME,
  branchedSubDomainName
})

const stackName = getStackName({
  githubRepository: process.env.GITHUB_REPOSITORY,
  branchName: process.env.BRANCH_NAME
})

new Stack(new App(), {
  stackName,
  url,
  domainName: process.env.DOMAIN_NAME,
  subDomainName: branchedSubDomainName,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
})
