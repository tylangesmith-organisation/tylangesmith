import Link from 'next/link'

import { getPostUrl } from '../../../utils/client/posts'
import { PostMetaData } from '../../../models/post'
import H2 from '../../ui/typography/h2'
import P from '../../ui/typography/p'
// import Tags from '../typography/tags'
// import Time from '../../ui/typography/time'

export interface Props {
  post: PostMetaData
}

const Component = (props: Props): JSX.Element => {
  const { post } = props

  const postUrl = getPostUrl(post.slug)

  return (
    <article>
      <Link href={postUrl}>
        <a className="!no-underline">
          <H2 className="!text-blue-600 !mb-1 !text-3xl !font-black" center={false}>{post.title}</H2>
          <P center={false}>{post.description}</P>
        </a>
      </Link>
    </article>
  )
}

export default Component
