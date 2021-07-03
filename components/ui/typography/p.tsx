import Link from 'next/link'
import ProseBase from './proseBase'

export interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
  className?: string;
  prose?: boolean;
  id?: string;
  href?: string;
}

const BaseP = (props: Props): JSX.Element => {
  const { children, className, prose = false, id } = props

  return (
    <ProseBase prose={prose}>
      <p id={id} className={`text-md sm:text-xl my-3 ${className}`}>
        {children}
      </p>
    </ProseBase>
  )
}

const Component = (props: Props): JSX.Element => {
  const { href } = props

  if (href) {
    return (
      <Link href={href}>
        <span>
          <BaseP className={`${href ? 'cursor-pointer' : ''}`} {...props} />
        </span>
      </Link>
    )
  }
  return (<BaseP {...props} />)
}

export default Component
