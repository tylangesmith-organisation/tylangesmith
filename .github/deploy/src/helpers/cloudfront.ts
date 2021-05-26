import { Stack } from '@aws-cdk/core'
import { IBucket } from '@aws-cdk/aws-s3'
import { CloudFrontWebDistribution, OriginProtocolPolicy } from '@aws-cdk/aws-cloudfront'
import { ICertificate } from '@aws-cdk/aws-certificatemanager'

export interface CreateDistributionProps {
  scope: Stack;
  staticWebsiteBucket: IBucket;
  certificate: ICertificate;
  domainName: string;
  subDomainName: string;
}

export const createDistribution = (props: CreateDistributionProps): CloudFrontWebDistribution => {
  const { scope, staticWebsiteBucket, subDomainName, domainName, certificate } = props

  return new CloudFrontWebDistribution(scope, 'distribution', {
    originConfigs: [
      {
        customOriginSource: {
          domainName: staticWebsiteBucket.bucketWebsiteDomainName,
          originProtocolPolicy: OriginProtocolPolicy.HTTP_ONLY
        },
        behaviors: [{ isDefaultBehavior: true }]
      }
    ],
    viewerCertificate: {
      aliases: [subDomainName ? `${subDomainName}.${domainName}` : domainName],
      props: {
        acmCertificateArn: certificate.certificateArn,
        sslSupportMethod: 'sni-only',
        minimumProtocolVersion: 'TLSv1'
      }
    }
  })
}
