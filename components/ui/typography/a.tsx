import Link from 'next/link'

export interface Props {
  children: JSX.Element | JSX.Element[] | string
  href: string
}

const Component = (props: Props) => {
  const { children, href } = props

  return (
    <Link href={href}>
      <a className="!text-blue-600" target="_blank">{children}</a>
    </Link>
  )
}

export default Component
