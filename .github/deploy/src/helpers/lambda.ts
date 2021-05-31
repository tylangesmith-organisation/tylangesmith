import { Stack } from '@aws-cdk/core'
import { Function, Runtime, AssetCode } from '@aws-cdk/aws-lambda'

export interface CreateFunctionProps {
  scope: Stack;
  name: string;
  handler: string;
}

export const createFunction = (props: CreateFunctionProps): Function => {
  const { scope, name, handler } = props

  return new Function(scope, `${name}-function`, {
    runtime: Runtime.NODEJS_14_X,
    code: new AssetCode('./src/functions'),
    handler
  })
}
