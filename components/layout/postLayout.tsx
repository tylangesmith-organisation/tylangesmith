import Navigation from '../ui/navigation/navigation'
import Footer from '../ui/footer/footer'
import Container from '../ui/container/container'
import { PostMetaData } from '../../models/post'
import H1 from '../ui/typography/h1'
import Tags from '../ui/typography/tags'

export interface Props extends PostMetaData {
  children: JSX.Element | JSX.Element[] | string
}

const Component = (props: Props) => {
  const { children, title, tags } = props

  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <main className="flex-grow">
        <Container>
          <article className="flex flex-col prose max-w-none">
            <H1>{title}</H1>
            <Tags>{tags}</Tags>
            {children}
          </article>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Component
