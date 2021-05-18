import { App, Stack, StackProps, RemovalPolicy } from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';
import { createCDN } from './cdn';

export interface Props extends StackProps {
  domainName: string;
  subDomainName: string;
}

export default class Website extends Stack {
  constructor(scope: App, props: Props) {
    super(scope, 'tylangesmith', props);
    const { domainName, subDomainName } = props;

    // Create the bucket to store the static files
    const websiteBucket = new Bucket(this, 'websiteBucket', {
      bucketName: `tylangesmith-${process.env.BRANCH_NAME}`,
      publicReadAccess: true,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      removalPolicy: RemovalPolicy.DESTROY
    })

    // Create the CDN resources
    const cdn = createCDN({
      scope: this,
      domainName: domainName,
      subDomainName: subDomainName,
      websiteBucket
    })

    // Ok deploy the files to the bucket
    new BucketDeployment(this, 'websiteBucketDeployment', {
      destinationBucket: websiteBucket,
      sources: [Source.asset('./out')],
      distribution: cdn.distribution,
    })
  }
}



