import { Stack } from '@aws-cdk/core';
import { IBucket } from '@aws-cdk/aws-s3';
import { CloudFrontWebDistribution } from '@aws-cdk/aws-cloudfront';
import { ICertificate } from '@aws-cdk/aws-certificatemanager';

export interface CreateDistributionProps {
  scope: Stack;
  staticWebsiteBucket: IBucket;
  certificate: ICertificate;
  domainName: string;
  subDomainName: string;
}

export const createDistribution = (props: CreateDistributionProps) => {
  const { scope, staticWebsiteBucket, subDomainName, domainName, certificate } = props;

  return new CloudFrontWebDistribution(scope, 'distribution', {
    originConfigs: [
      {
        s3OriginSource: { s3BucketSource: staticWebsiteBucket },
        behaviors: [{ isDefaultBehavior: true }]
      }
    ],
    viewerCertificate: {
      aliases: [`${subDomainName}.${domainName}`],
      props: {
        acmCertificateArn: certificate.certificateArn,
        sslSupportMethod: 'sni-only',
        minimumProtocolVersion: 'TLSv1'
      }
    }
  })
}
