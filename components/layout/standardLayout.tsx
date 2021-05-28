import Navigation from '../ui/navigation/navigation'
import Footer from '../ui/footer/footer'

export interface Props {
  children: JSX.Element | JSX.Element[] | string;
  footer?: boolean;
}

const Component = (props: Props) => {
  const { children, footer = true } = props

  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <div className="flex-grow">{children}</div>
      {footer && <Footer />}
    </div>
  )
}

export default Component
