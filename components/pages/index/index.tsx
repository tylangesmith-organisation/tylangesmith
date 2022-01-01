import StandardLayout from '../../layout/standardLayout'
import H1 from '../../ui/typography/h1'

import BlogList from '../../ui/blog/BlogList'
import Section from '../../ui/container/section'

import { Props } from './controller'

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
