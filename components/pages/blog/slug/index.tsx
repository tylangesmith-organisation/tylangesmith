import { MDXRemote } from 'next-mdx-remote'
import Gist from 'react-gist'

import PostLayout from '@/components/layout/postLayout'
import Section from '@/components/ui/container/section'
import { Props } from '@/components/pages/blog/slug/controller'

import A from '@/components/ui/typography/a'
import Image from '@/components/ui/image/image'
import ProseWidth from '@/components/ui/container/proseWidth'

const components = {
  Section: (props: any) => <Section {...props} />,
  h2: (props: any) => <h2 className="my-3" {...props} />,
  h3: (props: any) => <h3 className="my-2" {...props} />,
  p: (props: any) => <p className="my-2 text-lg font-normal" {...props} />,
  a: (props: any) => <A {...props} />,
  blockquote: (props: any) => <blockquote className="border-blue-600 bg-gray-100" {...props} />,
  inlineCode: (props: any) => <code className="px-2 py-1 font-normal rounded-sm bg-gray-200" {...props} />,
  Image: (props: any) => <Image {...props} />,
  Gist: (props: any) => <Gist {...props} />,
  ProseWidth: (props: any) => <ProseWidth {...props} />
}

const Component = (props: Props): JSX.Element => {
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
