import Link from 'next/link'
import Container from '../container/container'

const Component = () => {
  return (
    <header className="py-4">
      <Container>
        <div className="flex h-12">
          <Link href="/">
            <a aria-label="Home" className="flex items-center">
              <h2 className="font-black text-xl">Ty Lange-Smith</h2>
            </a>
          </Link>
        </div>
      </Container>
    </header>
  )
}

export default Component
