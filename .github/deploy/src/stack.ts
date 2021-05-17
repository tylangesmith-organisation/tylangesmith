import { App, Stack, StackProps, RemovalPolicy } from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';
import { CloudFrontWebDistribution } from '@aws-cdk/aws-cloudfront';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';

export interface Props extends StackProps { }

export default class Website extends Stack {
  constructor(scope: App, props: Props) {
    super(scope, 'tylangesmith', props);

    // First we need to create the bucket
    const websiteBucket = new Bucket(this, 'websiteBucket', {
      bucketName: `tylangesmith-${process.env.BRANCH_NAME}`,
      publicReadAccess: true,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      removalPolicy: RemovalPolicy.DESTROY
    })

    const websiteDistribution = new CloudFrontWebDistribution(this, 'websiteDistribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: websiteBucket,
          },
          behaviors: [
            {
              isDefaultBehavior: true
            }
          ]
        }
      ]
    })

    // Ok deploy the files to the bucket
    new BucketDeployment(this, 'websiteBucketDeployment', {
      destinationBucket: websiteBucket,
      sources: [Source.asset('./out')],
      distribution: websiteDistribution,
    })

  }
}
