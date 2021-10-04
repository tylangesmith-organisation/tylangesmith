import Navigation from '../ui/navigation/navigation'
import Footer from '../ui/footer/footer'
import Container from '../ui/container/container'

export interface Props {
  children: JSX.Element | JSX.Element[] | string
  title: string
  description: string
  date: string
  tags: string[]
  headerImageHighQualitySource: string
  headerImageLowQualitySource: string
  headerImageAlt: string
  headerImageLabel: string
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
