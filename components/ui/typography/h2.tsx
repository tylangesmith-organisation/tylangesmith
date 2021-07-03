import Link from 'next/link'
import ProseBase from './proseBase'

export interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
  className?: string;
  prose?: boolean;
  id?: string;
  href?: string;
}

const BaseH2 = (props: Props): JSX.Element => {
  const { children, className, prose = false, id } = props

  return (
    <ProseBase prose={prose}>
      <h2 id={id} className={`font-medium text-md sm:text-xl md:text-2xl my-3 ${className}`}>
        {children}
      </h2>
    </ProseBase>
  )
}

const Component = (props: Props): JSX.Element => {
  const { href } = props

  if (href) {
    return (
      <Link href={href}>
        <span>
          <BaseH2 className={`${href ? 'cursor-pointer' : ''}`} {...props} />
        </span>
      </Link>
    )
  }
  return (<BaseH2 {...props} />)
}

export default Component
