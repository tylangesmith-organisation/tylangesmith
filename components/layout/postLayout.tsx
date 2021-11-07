import Navigation from '../ui/navigation/navigation'
import Footer from '../ui/footer/footer'
import Container from '../ui/container/container'
import { PostMetaData } from '../../models/post'

export interface Props extends PostMetaData {
  children: JSX.Element | JSX.Element[] | string
}

const Component = (props: Props) => {
  const { children } = props

  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <main className="flex-grow">
        <Container>
          <article className="flex flex-col prose max-w-none">
            {children}
          </article>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Component
