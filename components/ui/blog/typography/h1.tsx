
export interface Props {
  children: string;
}

const Component = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <h1>{children}</h1>
  )
}

export default Component
