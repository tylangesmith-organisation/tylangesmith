import { MDXRemote } from 'next-mdx-remote'

import PostLayout from '../../../layout/postLayout'
import Section from '../../../ui/container/section'
import { GetStaticPropsResult } from './controller'

import H1 from '../../../ui/typography/h1'
import H2 from '../../../ui/typography/h2'
import P from '../../../ui/typography/p'
import A from '../../../ui/typography/a'

const components = {
  Section: (props: any) => <Section {...props} />,
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  p: (props: any) => <P {...props} />,
  a: (props: any) => <A {...props} />
}

const Component = (props: GetStaticPropsResult): JSX.Element => {
  return (
    <PostLayout {...props.postMetaData}>
      <MDXRemote
        compiledSource={props.mdxSerializeResult.compiledSource}
        scope={props.mdxSerializeResult.scope}
        components={components} />
    </PostLayout>
  )
}

export default Component
