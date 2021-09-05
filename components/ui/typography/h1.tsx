import ProseWidth from '../container/proseWidth'

export interface Props {
  children: JSX.Element | JSX.Element[] | string

}

const Component = (props: Props) => {
  const { children } = props

  return (
    <ProseWidth proseWidth={true}>
      <h1 className="text-center">{children}</h1>
    </ProseWidth>
  )
}

export default Component
