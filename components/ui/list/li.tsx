import ProseWidth from '@/components/ui/container/proseWidth'

export interface Props {
  children: JSX.Element | JSX.Element[] | string

}

const Component = (props: Props) => {
  const { children } = props

  return (
    <ProseWidth proseWidth={true}>
      <li className="my-1">{children}</li>
    </ProseWidth>
  )
}

export default Component
