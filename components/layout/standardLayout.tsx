import Navigation from '../ui/navigation/navigation'
import Container from '../ui/container/container'

export interface Props {
  children: JSX.Element | JSX.Element[] | string
}

const Component = (props: Props) => {
  const { children } = props

  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <main className="flex-grow pb-12">
        <Container>
          <div className="flex flex-col prose max-w-none">
            {children}
          </div>
        </Container>
      </main>
    </div>
  )
}

export default Component
