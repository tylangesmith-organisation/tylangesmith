import Container from '../../ui/container/container'
import Link from './link'
import Emoji from '../emoji/emoji'

const Component = (): JSX.Element => (
  <div className="bg-gray-50">
    <Container padding={false}>
      <div className="py-10 md:py-28">
        <div className="flex items-center justify-center mb-2">
          <p className="text-gray-500 font-light">
            See <Emoji symbol="👀" label="eye" /> what I&apos;m up to
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Link href="https://github.com/tylangesmith-organisation" newTab>
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/tylangesmith/" newTab>
            LinkedIn
          </Link>
        </div>
      </div>
    </Container>
  </div>
)

export default Component
