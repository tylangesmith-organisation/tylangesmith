import ProseWidth from '../container/proseWidth'

export interface Props {
  children: JSX.Element | JSX.Element[] | string

}

const Component = (props: Props) => {
  const { children } = props

  return (
    <ProseWidth proseWidth={true}>
      <blockquote className="!font-normal !border-blue-600 bg-gray-50">{children}</blockquote>
    </ProseWidth>
  )
}

export default Component
