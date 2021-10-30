import { parse, format } from 'date-fns'
import ProseWidth from '../container/proseWidth'

export interface Props {
  children: string
}

const Component = (props: Props) => {
  const { children } = props

  const parsedDate = parse(children, 'yyyy-MM-dd', new Date())

  return (
    <ProseWidth proseWidth={true}>
      <time className="mb-4">{format(parsedDate, 'MMMM yyyy')}</time>
    </ProseWidth>
  )
}

export default Component