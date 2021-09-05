export interface Props {
  children: JSX.Element | JSX.Element[] | string
  href: string
}

const Component = (props: Props) => {
  const { children, href } = props

  return (
    <a className="!text-blue-600" href={href} target="_blank" rel="noreferrer">{children}</a>
  )
}

export default Component
