import Container from '../../ui/container/container'

export interface Props {
  children: any;
  prose?: boolean;
  padding?: boolean;
}

const Component = (props: Props): JSX.Element => {
  const { children, prose = false, padding = true } = props
  return (
    <Container padding={padding}>
      <div className={`my-8 md:my-20 ${prose ? 'max-w-prose' : ''}`}>
        {children}
      </div>
    </Container>
  )
}

export default Component
