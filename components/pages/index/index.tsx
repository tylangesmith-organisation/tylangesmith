import StandardLayout from '@/components/layout/standardLayout'
import H1 from '@/components/ui/typography/h1'

import BlogList from '@/components/ui/blog/BlogList'
import Section from '@/components/ui/container/section'

import { Props } from '@/components/pages/index/controller'

const Component = (props: Props): JSX.Element => {
  const { posts } = props

  const x = posts.concat(posts)

  return (
    <StandardLayout>
      <Section>
        <H1 center={false}>I'm Ty, a Machine Learning Engineer based in Australia 🦘</H1>
        <BlogList posts={x.map(post => post.postMetaData)} />
      </Section>
    </StandardLayout>
  )
}

export default Component
