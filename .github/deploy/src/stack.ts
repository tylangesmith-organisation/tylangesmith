import { App, Stack, StackProps } from '@aws-cdk/core';

export interface Props extends StackProps { }

export default class Website extends Stack {
  constructor(scope: App, props: Props) {
    super(scope, 'tylangesmith', props);

  }
}
