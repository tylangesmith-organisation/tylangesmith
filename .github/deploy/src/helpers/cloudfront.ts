import { Stack } from '@aws-cdk/core'
import { IBucket } from '@aws-cdk/aws-s3'
import { CloudFrontWebDistribution, OriginProtocolPolicy, LambdaEdgeEventType } from '@aws-cdk/aws-cloudfront'
import { ICertificate } from '@aws-cdk/aws-certificatemanager'
import { IVersion } from '@aws-cdk/aws-lambda'

export interface CreateDistributionProps {
  scope: Stack;
  staticWebsiteBucket: IBucket;
  certificate: ICertificate;
  url: string;
  edgeFunctionVersion: IVersion
}

export const createDistribution = (props: CreateDistributionProps): CloudFrontWebDistribution => {
  const { scope, staticWebsiteBucket, certificate, url, edgeFunctionVersion } = props

  return new CloudFrontWebDistribution(scope, 'distribution', {
    originConfigs: [
      {
        customOriginSource: {
          domainName: staticWebsiteBucket.bucketWebsiteDomainName,
          originProtocolPolicy: OriginProtocolPolicy.HTTP_ONLY
        },
        behaviors: [
          {
            isDefaultBehavior: true,
            lambdaFunctionAssociations: [
              {
                lambdaFunction: edgeFunctionVersion,
                eventType: LambdaEdgeEventType.ORIGIN_REQUEST
              }
            ]
          }
        ]
      }
    ],
    viewerCertificate: {
      aliases: [url],
      props: {
        acmCertificateArn: certificate.certificateArn,
        sslSupportMethod: 'sni-only',
        minimumProtocolVersion: 'TLSv1'
      }
    }
  })
}
