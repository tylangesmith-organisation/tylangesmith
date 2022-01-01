
export interface Props {
  children: any;
  proseWidth?: boolean;
  center?: boolean;
}

const Component = (props: Props): JSX.Element => {
  const { children, proseWidth = true, center = true } = props
  return (
    <div className={`flex flex-col w-full ${proseWidth ? 'max-w-prose' : 'max-w-none'} ${center ? 'mx-auto' : ''} break-words`}>
      {children}
    </div>
  )
}

export default Component
