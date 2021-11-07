import { PostMetaData } from '../../../models/post'
import Link from 'next/link'

export interface Props {
  posts: PostMetaData[]
}

const Component = (props: Props): JSX.Element => {
  const { posts } = props

  return (
    <>
      {
        posts.map(post => <Link key={post.slug} href={`blog/${post.slug}`}>{post.title}</Link>)
      }
    </>
  )
}

export default Component
