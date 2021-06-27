import Link from 'next/link'
import H2, { Props as H2Props } from '../../../ui/typography/h2'

export interface Props extends H2Props {
  href?: string;
  id?: string;
}

const Component = (props: Props): JSX.Element => {
  const { href = '', id, ...rest } = props

  console.log(id)

  return (
    <Link href={href}>
      <span>
        <H2 id={id} className={`${href ? 'cursor-pointer' : ''}`} {...rest} />
      </span>
    </Link>
  )
}

export default Component
