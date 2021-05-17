import { Stack } from '@aws-cdk/core';
import { IBucket } from '@aws-cdk/aws-s3';
import { CloudFrontWebDistribution, IDistribution } from '@aws-cdk/aws-cloudfront';
import { HostedZone, ARecord, RecordTarget } from '@aws-cdk/aws-route53';
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets';
import { DnsValidatedCertificate } from '@aws-cdk/aws-certificatemanager';

export interface Props {
  scope: Stack
  domainName: string;
  subDomainName: string;
  websiteBucket: IBucket;
}

export interface CreateCDNResults {
  distribution: IDistribution
}

export const createCDN = (props: Props): CreateCDNResults => {
  const { scope, domainName, subDomainName, websiteBucket } = props;

  // First grab the hosted zone
  const hostedZone = HostedZone.fromLookup(scope, 'hostedZone', { domainName })

  // Next let's create the certificate for our endpoint
  const certificate = new DnsValidatedCertificate(scope, 'certificate', {
    domainName: `${subDomainName}.${domainName}`,
    hostedZone,
    region: 'ap-southeast-2'
  })

  // Ok setup a cloudfront distribution for the bucket
  const distribution = new CloudFrontWebDistribution(scope, 'distribution', {
    originConfigs: [
      {
        s3OriginSource: { s3BucketSource: websiteBucket },
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

  // Finally let's create an A Record that points to the cloudfron distribution
  new ARecord(scope, 'aRecord', {
    target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    zone: hostedZone,
    recordName: subDomainName
  })

  return {
    distribution
  }
}
