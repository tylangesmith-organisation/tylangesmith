import Link from 'next/link'

export interface Props {
  children: string;
  href: string;
}

const Component = (props: Props) => {
  const { children, href } = props

  return (
    <Link href={href}>
      <a className="text-lg font-bold text-gray-900">{children}</a>
    </Link>
  )
}

export default Component
