import { MDXRemote } from 'next-mdx-remote'

import PostLayout from '../../../layout/postLayout'
import Section from '../../../ui/container/section'
import { GetStaticPropsResult } from './controller'

import H1 from '../../../ui/typography/h1'
import H2 from '../../../ui/typography/h2'
import H3 from '../../../ui/typography/h3'
import P from '../../../ui/typography/p'
import A from '../../../ui/typography/a'
import Blockquote from '../../../ui/typography/blockquote'
import InlineCode from '../../../ui/typography/inlineCode'
import Time from '../../../ui/typography/time'
import Tags from '../../../ui/tags/tags'
import Image from '../../../ui/image/image'
import Ul from '../../../ui/list/ul'
import Li from '../../../ui/list/li'

const components = {
  Section: (props: any) => <Section {...props} />,
  h1: (props: any) => <H1 {...props} />,
  h2: (props: any) => <H2 {...props} />,
  h3: (props: any) => <H3 {...props} />,
  p: (props: any) => <P {...props} />,
  a: (props: any) => <A {...props} />,
  blockquote: (props: any) => <Blockquote {...props} />,
  inlineCode: (props: any) => <InlineCode {...props} />,
  time: (props: any) => <Time {...props} />,
  Tags: (props: any) => <Tags {...props} />,
  Image: (props: any) => <Image {...props} />,
  ul: (props: any) => <Ul {...props} />,
  li: (props: any) => <Li {...props} />
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