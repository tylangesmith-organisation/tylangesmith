import ProseWidth from '../container/proseWidth'

export interface Props {
  children?: JSX.Element | JSX.Element[] | string | string[]
  proseWidth?: boolean
  center?: boolean
}

const Component = (props: Props) => {
  const { children, proseWidth, center } = props

  return (
    <ProseWidth proseWidth={proseWidth} center={center}>
      {children}
    </ProseWidth>
  )
}

export default Component
