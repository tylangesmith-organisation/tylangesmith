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
    <Link href={postUrl}>
      <a className="no-underline my-3">
        <article className="border-blue-600 bg-gray-100 border-l-4 py-1 px-3">
          <h3 className="my-2 text-blue-600 text-3xl font-black">{post.title}</h3>
          <p className="my-2 text-lg font-medium">{post.description}</p>
        </article>
      </a>
    </Link>
  )
}

export default Component
