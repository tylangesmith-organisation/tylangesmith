// import { App } from '@aws-cdk/core'
import { getSubDomainName, getUrl } from './helpers/helper'
// import Stack from './stack'

if (!process.env.BRANCH_NAME) throw Error('A BRANCH_NAME must be provided...')
if (!process.env.DOMAIN_NAME) throw Error('A DOMAIN_NAME must be provided...')

const branchName = process.env.BRANCH_NAME

// e.g. tylangesmith.com
const domainName = process.env.DOMAIN_NAME
const subDomainName = getSubDomainName({ branchName })
const url = getUrl({ domainName, subDomainName })

console.log(`DOMAIN_NAME: ${domainName}`)
console.log(`SUBDOMAIN_NAME: ${subDomainName}`)
console.log(`URL: ${url}`)

// const app = new App()

// new Stack(app, {
//   stackName: `tylangesmith-${branchName}`,
//   url,
//   domainName,
//   subDomainName,
//   env: {
//     // Need to pass these in to lookup the route53 hostedZone
//     account: process.env.CDK_DEFAULT_ACCOUNT,
//     region: process.env.CDK_DEFAULT_REGION
//   }
// })
