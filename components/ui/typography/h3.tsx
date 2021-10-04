import ProseWidth from '../container/proseWidth'

export interface Props {
  children: JSX.Element | JSX.Element[] | string

}

const Component = (props: Props) => {
  const { children } = props

  return (
    <ProseWidth proseWidth={true}>
      <h3 className="!mt-3">{children}</h3>
    </ProseWidth>
  )
}

export default Component
