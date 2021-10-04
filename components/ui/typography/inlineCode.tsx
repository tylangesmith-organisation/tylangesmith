export interface Props {
  children: JSX.Element | JSX.Element[] | string
}

const Component = (props: Props) => {
  const { children } = props

  return (
    <code className="bg-gray-200 px-2 py-1 !font-normal rounded-sm">{children}</code>
  )
}

export default Component
