import ProseWidth from '../container/proseWidth'

export interface Props {
  children: JSX.Element | JSX.Element[] | string

}

const Component = (props: Props) => {
  const { children } = props

  return (
    <ProseWidth proseWidth={true}>
      <h2 className="!mt-6">{children}</h2>
    </ProseWidth>
  )
}

export default Component
