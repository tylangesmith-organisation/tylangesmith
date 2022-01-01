import { GetPostResult } from '../../../utils/server/posts'
import Index from './index'

export interface Props {
  posts: GetPostResult[]
}

const Component = (props: Props): JSX.Element => <Index {...props} />

export default Component
