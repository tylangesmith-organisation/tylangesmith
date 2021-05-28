import Link from 'next/link'

export interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
  href: string;
  newTab?: boolean;
}

const Component = (props: Props) => {
  const { children, href, newTab = false } = props

  return (
    <Link href={href}>
      <a className="text-lg text-gray-900" target={newTab ? '_blank' : ''}>
        {children}
      </a>
    </Link>
  )
}

export default Component
