import Container from '../../ui/container/container'

export interface Props {
  children: any;
  pose?: boolean;
  padding?: boolean;
}

const Component = (props: Props): JSX.Element => {
  const { children, pose = false, padding = true } = props
  return (
    <Container padding={padding}>
      <div className={`my-8 md:my-28 ${pose ? 'max-w-prose' : ''}`}>
        {children}
      </div>
    </Container>
  )
}

export default Component
