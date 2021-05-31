import { Stack } from '@aws-cdk/core'
import { Function, Runtime, AssetCode, Version } from '@aws-cdk/aws-lambda'

export interface CreateFunctionVersionProps {
  scope: Stack;
  name: string;
  handler: string;
}

export const createFunctionVersion = (props: CreateFunctionVersionProps): Version => {
  const { scope, name, handler } = props

  const lambda = new Function(scope, `${name}-function`, {
    runtime: Runtime.NODEJS_14_X,
    code: new AssetCode('./src/functions'),
    handler
  })

  return new Version(scope, '', {
    lambda
  })
}
