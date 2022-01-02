import ProseWidth from '@/components/ui/container/proseWidth'

export interface Props {
  children: JSX.Element | JSX.Element[] | string

}

const Component = (props: Props) => {
  const { children } = props

  return (
    <ProseWidth proseWidth={true}>
      <ul className="my-2 text-lg list-disc list-inside">{children}</ul>
    </ProseWidth>
  )
}

export default Component
