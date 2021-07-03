import Link from 'next/link'

export interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
  className?: string;
  prose?: boolean;
  id?: string;
  href: string;
  newTab?: boolean;
}

const Component = (props: Props): JSX.Element => {
  const { children, className, id, href, newTab = false } = props

  return (
    <Link href={href}>
      <a id={id} className={`text-md sm:text-xl my-3 underline text-green-700 ${className}`} target={newTab ? '_blank' : ''}>
        {children}
      </a>
    </Link>
  )
}

export default Component
