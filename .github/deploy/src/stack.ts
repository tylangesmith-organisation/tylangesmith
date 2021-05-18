import { App, Stack, StackProps } from '@aws-cdk/core';
import { createStaticWebsiteBucket, createStaticWebsiteBucketDeployment } from './helpers/bucket';
import { getHostedZone, createARecordForDistribution } from './helpers/route53';
import { createCertificate } from './helpers/certificate';
import { createDistribution } from './helpers/cloudfront';

export interface Props extends StackProps {
  domainName: string;
  subDomainName: string;
  branchName: string;
}

export default class Website extends Stack {
  constructor(scope: App, props: Props) {
    super(scope, 'tylangesmith', props);
    const { domainName, subDomainName, branchName } = props;

    // Create the bucket to store the static files
    const staticWebsiteBucket = createStaticWebsiteBucket({
      scope: this,
      branchName 
    })

    // Create the CDN
    const hostedZone = getHostedZone({
      scope: this,
      domainName
    })

    const certificate = createCertificate({
      scope: this,
      hostedZone,
      domainName,
      subDomainName
    })

    const distribution = createDistribution({
      scope: this,
      staticWebsiteBucket,
      certificate,
      domainName,
      subDomainName
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
