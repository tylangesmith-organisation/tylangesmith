import Link from 'next/link'

export interface Props {
  children: string;
  href: string;
  newTab?: boolean;
}

const Component = (props: Props) => {
  const { children, href, newTab = false } = props

  return (
    <Link href={href}>
      <a
        className="mx-4 md:mx-6 lg:mx-8 text-lg text-gray-900"
        target={newTab ? '_blank' : ''}
      >
        {children}
      </a>
    </Link>
  )
}

export default Component
