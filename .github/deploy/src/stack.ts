import { App, Stack, StackProps } from '@aws-cdk/core'
import {createStaticWebsiteBucket, createStaticWebsiteBucketDeployment } from './helpers/bucket'
import { getHostedZone, createARecordForDistribution, getUrl } from './helpers/route53'
import { createCertificate } from './helpers/certificate'
import { createDistribution } from './helpers/cloudfront'

export interface Props extends StackProps {
  url: string;
}

export default class Website extends Stack {
  constructor(scope: App, props: Props) {
    super(scope, 'tylangesmith', props)
    const { url } = props
    
    // Create the bucket to store the static files
    const staticWebsiteBucket = createStaticWebsiteBucket({
      scope: this,
      bucketName: url
    })

    // Create the CDN
    const hostedZone = getHostedZone({
      scope: this,
      domainName
    })

    const certificate = createCertificate({
      scope: this,
      hostedZone,
      url
    })

    const distribution = createDistribution({
      scope: this,
      staticWebsiteBucket,
      certificate,
      url
    })

    createARecordForDistribution({
      scope: this,
      hostedZone,
      subDomainName,
      distribution
    })

    // Deploy the static files to the bucket
    createStaticWebsiteBucketDeployment({
      scope: this,
      staticWebsiteBucket,
      distribution
    })
  }
}
