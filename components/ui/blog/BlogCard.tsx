import Link from 'next/link'

import { getPostUrl } from '@/utils/client/posts'
import { PostMetaData } from '@/models/post'

export interface Props {
  post: PostMetaData
}

const Component = (props: Props): JSX.Element => {
  const { post } = props

  const postUrl = getPostUrl(post.slug)

  return (
    <article className="my-3">
      <Link href={postUrl}>
        <a className="no-underline">
          <h3 className="my-2 text-blue-600 text-3xl font-black">{post.title}</h3>
          <p className="my-2 text-lg font-normal">{post.description}</p>
        </a>
      </Link>
    </article>
  )
}

export default Component
