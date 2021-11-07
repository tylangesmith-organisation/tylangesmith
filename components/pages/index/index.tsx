import StandardLayout from '../../layout/standardLayout'
import H1 from '../../ui/typography/h1'
import BlogList from '../../ui/blog/BlogList'

import { Props } from './controller'

const Component = (props: Props): JSX.Element => {
  const { posts } = props

  return (
    <StandardLayout>
      <H1 center={false}>Hey 👋, I'm Ty Lange-Smith. I'm a software engineer based in Australia.</H1>
      <BlogList posts={posts.map(post => post.postMetaData)} />
    </StandardLayout>
  )
}

export default Component
