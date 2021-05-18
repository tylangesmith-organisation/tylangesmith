import { Stack } from '@aws-cdk/core';
import { IHostedZone } from '@aws-cdk/aws-route53';
import { DnsValidatedCertificate } from '@aws-cdk/aws-certificatemanager';

export interface CreateCertificateProps {
  scope: Stack;
  hostedZone: IHostedZone;
  domainName: string;
  subDomainName: string;
}

export const createCertificate = (props: CreateCertificateProps) => {
  const { scope, hostedZone, domainName, subDomainName } = props;

  return new DnsValidatedCertificate(scope, 'certificate', {
    domainName: `${subDomainName}.${domainName}`,
    hostedZone,
    region: 'us-east-1'
  })
}
