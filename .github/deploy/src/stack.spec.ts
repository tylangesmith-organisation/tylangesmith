import { App } from '@aws-cdk/core'
import { SynthUtils } from '@aws-cdk/assert'
import Stack from './stack'

// The HostedZone.fromLookup requires an AWS SDK call so let's mock that
jest.mock('./helpers/route53', () => ({
  ...(jest.requireActual('./helpers/route53')),
  getHostedZone: jest.fn(() => {
    return {
      zoneName: 'tylangesmith.com',
      hostedZoneArn: '',
      hostedZoneId: ''
    }
  })
}))

describe('Stack', () => {
  it('should create the expected stack for the master branch', () => {
    // Arrange
    const app = new App()
    const domainName = 'tylangesmith.com'
    const subDomainName = ''
    const url = 'tylangesmith.com'

    // Act
    const stack = new Stack(app, {
      url,
      domainName,
      subDomainName,
      env: {
        region: 'us-east-1'
      }
    })

    // Assert
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot()
  })

  it('should create the expected stack for the non-master branch', () => {
    // Arrange
    const app = new App()
    const domainName = 'tylangesmith.com'
    const subDomainName = 'blog'
    const url = 'blog.tylangesmith.com'

    // Act
    const stack = new Stack(app, {
      url,
      domainName,
      subDomainName,
      env: {
        region: 'us-east-1'
      }
    })

    // Assert
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot()
  })
})
