import { GetPostResult } from '@/utils/server/posts'
import Index from '@/components/pages/index/index'

export interface Props {
  posts: GetPostResult[]
}

const Component = (props: Props): JSX.Element => <Index {...props} />

export default Component
