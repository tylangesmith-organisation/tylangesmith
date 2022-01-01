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

  // <div className="shadow-md px-6 py-2 border-l-4 border-blue-600 bg-white">
  //   <Link href={postUrl}>
  //     <a className="!no-underline">
  //       <H2 proseWidth={false} center={false}>{post.title}</H2>
  //     </a>
  //   </Link>
  //   <Link href={postUrl}>
  //     <a className="!no-underline">
  //       <P proseWidth={false} center={false}>{post.description}</P>
  //     </a>
  //   </Link>
  //   <Tags center={false}>{post.tags}</Tags>
  //   <Time center={false}>{post.date}</Time>
  // </div>

  return (
    <article>
      <Link href={postUrl}>
        <a className="!no-underline">
          <H2 className="!text-blue-600 !mb-1 !text-3xl !font-black" center={false}>{post.title}</H2>
          <div className="flex justify-start max-w-prose">
            {/* <Time className="m-0">{post.date}</Time>
            <P className="!my-0">{post.readingTime}</P> */}
          </div>
          <P center={false}>{post.description}</P>
          {/* <P center={false}>{post.readingTime}</P> */}
          {/* <Tags center={false}>{post.tags}</Tags> */}
        </a>
      </Link>
    </article>
  )
}

export default Component
