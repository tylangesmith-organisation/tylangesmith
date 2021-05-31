import { App, Stack, StackProps } from '@aws-cdk/core'
import { createStaticWebsiteBucket, createStaticWebsiteBucketDeployment } from './helpers/bucket'
import { getHostedZone, createARecordForDistribution } from './helpers/route53'
import { createCertificate } from './helpers/certificate'
import { createFunction } from './helpers/lambda'
import { createDistribution } from './helpers/cloudfront'

export interface Props extends StackProps {
  url: string;
  domainName: string;
  subDomainName: string;
}

export default class Website extends Stack {
  constructor (scope: App, props: Props) {
    super(scope, 'tylangesmith', props)
    const { url, domainName, subDomainName } = props

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

    const mapperFunction = createFunction({
      scope: this,
      handler: 'mapperFunction.handler',
      name: 'mapper'
    })

    const distribution = createDistribution({
      scope: this,
      staticWebsiteBucket,
      certificate,
      url,
      mapperFunction
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
