import { PostMetaData } from '@/models/post'
import BlogCard from '@/components/ui/blog/BlogCard'

export interface Props {
  posts: PostMetaData[]
}

const Component = (props: Props): JSX.Element => {
  const { posts } = props

  return (
    <>
      {
        posts.map(post =>
          (
            <BlogCard key={post.slug} post={post} />
          )
        )
      }
    </>
  )
}

export default Component
