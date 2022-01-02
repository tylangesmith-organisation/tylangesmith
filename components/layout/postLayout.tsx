import Navigation from '@/components/ui/navigation/navigation'
import Footer from '@/components/ui/footer/footer'
import Container from '@/components/ui/container/container'
import { PostMetaData } from '@/models/post'
import Tags from '@/components/ui/typography/tags'

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
          <article className="flex flex-col mx-auto prose">
            <h1 className="mb-3">{title}</h1>
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
