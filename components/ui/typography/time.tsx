import { parse, format } from 'date-fns'
import ProseBase, { Props as ProseBaseProps } from './proseBase'

export interface Props extends ProseBaseProps {
  children: string
}

const Component = (props: Props) => {
  const { children, ...proseBaseProps } = props

  const parsedDate = parse(children, 'yyyy-MM-dd', new Date())

  return (
    <ProseBase {...proseBaseProps}>
      <time className="mb-4">{format(parsedDate, 'MMMM yyyy')}</time>
    </ProseBase>
  )
}

export default Component
