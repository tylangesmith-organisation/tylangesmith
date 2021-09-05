
export interface Props {
  children: any;
  proseWidth?: boolean;
}

const Component = (props: Props): JSX.Element => {
  const { children, proseWidth = false } = props
  return (
    <div className={`flex flex-col w-full ${proseWidth ? 'max-w-prose' : 'max-w-none'} mx-auto`}>
      {children}
    </div>
  )
}

export default Component
