import { GetStaticPropsResult } from 'next'

import { getPosts } from '../utils/posts/posts'
import Index, { Props } from '../components/pages/index/controller'

const Page = (props: Props): JSX.Element => <Index {...props} />

export const getStaticProps = async (): Promise<GetStaticPropsResult<Props>> => {
  return {
    props: {
      posts: await getPosts()
    }
  }
}

export default Page
