import { Stack } from '@aws-cdk/core'
import { Function, Runtime, AssetCode, Version } from '@aws-cdk/aws-lambda'
import { Role, PolicyStatement, ServicePrincipal, CompositePrincipal, Effect } from '@aws-cdk/aws-iam'

export interface CreateFunctionVersionProps {
  scope: Stack;
  name: string;
  handler: string;
}

export const createFunctionVersion = (props: CreateFunctionVersionProps): Version => {
  const { scope, name, handler } = props

  const executionRole = new Role(scope, `${name}-execution-role`, {
    assumedBy: new CompositePrincipal(
      new ServicePrincipal('lambda.amazonaws.com'),
      new ServicePrincipal('edgelambda.amazonaws.com')
    )
  })

  executionRole.addToPolicy(new PolicyStatement({
    effect: Effect.ALLOW,
    actions: ['sts:AssumeRole']
  }))

  executionRole.addToPolicy(new PolicyStatement({
    effect: Effect.ALLOW,
    actions: [
      'logs:CreateLogStream',
      'logs:PutLogEvents',
      'logs:CreateLogGroup'
    ],
    resources: ['*']
  }))

  const lambda = new Function(scope, `${name}-function`, {
    runtime: Runtime.NODEJS_14_X,
    code: new AssetCode('./src/functions'),
    handler,
    role: executionRole
  })

  return new Version(scope, `${name}-function-version`, {
    lambda
  })
}
