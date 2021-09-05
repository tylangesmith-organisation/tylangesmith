import ProseWidth from '../container/proseWidth'

export interface Props {
  children: JSX.Element | JSX.Element[] | string

}

const Component = (props: Props) => {
  const { children } = props

  return (
    <ProseWidth proseWidth={true}>
      <p className="!my-3 text-lg">{children}</p>
    </ProseWidth>
  )
}

export default Component
