import Link from 'next/link'
import Container from '@/components/ui/container/container'

interface FooterItemProps {
  href: string
  text: string
  blank?: boolean
}

const FooterItem = (props: FooterItemProps) => {
  const { href, text, blank = true } = props
  return (
    <li className="mb-2 sm:mb-0 sm:mr-4">
      <Link href={href}>
        <a className="font-black text-xl" target={blank ? '_blank' : ''}>{text}</a>
      </Link>
    </li>
  )
}

const Component = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <Container>
        <ul className="flex flex-col items-center sm:flex-row">
          <FooterItem href="/" text="tylangesmith.com" blank={false} />
          <FooterItem href="https://github.com/tylangesmith/" text="GitHub" />
          <FooterItem href="https://www.linkedin.com/in/tylangesmith/" text="LinkedIn" />
        </ul>
      </Container>
    </footer>
  )
}

export default Component
