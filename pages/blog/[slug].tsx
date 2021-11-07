import { GetStaticPropsContext, GetStaticPropsResult as BaseGetStaticPropsResult, GetStaticPathsResult } from 'next'

import { getPosts, getPostForSlug } from '../../utils/posts/posts'
import Blog, { Props } from '../../components/pages/blog/slug/controller'

const Page = (props: Props): JSX.Element => <Blog {...props} />

export const getStaticProps = async (props: GetStaticPropsContext): Promise<BaseGetStaticPropsResult<Props>> => {
  const slug = props.params?.slug as string || ''
  return {
    props: await getPostForSlug(slug)
  }
}

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const posts = await getPosts()

  return {
    paths: posts.map(post => {
      return {
        params: { slug: post.postMetaData.slug }
      }
    }),
    fallback: false
  }
}

export default Page
