import Link from 'next/link'

import { getPostUrl } from '@/utils/client/posts'
import { PostMetaData } from '@/models/post'
import Tags from '@/components/ui/typography/tags'

export interface Props {
  post: PostMetaData
}

const Component = (props: Props): JSX.Element => {
  const { post } = props

  const postUrl = getPostUrl(post.slug)

  return (
    <article className="my-4">
      <Link href={postUrl}>
        <a className="no-underline">
          <h2 className="my-2 text-blue-600 text-3xl font-black">{post.title}</h2>
          <p className="my-2 text-lg font-normal">{post.description}</p>
        </a>
      </Link>
    </article>
  )
}

export default Component
