
export interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
  className?: string;
  pose?: boolean;
}

const Component = (props: Props): JSX.Element => {
  const { children, className, pose = false } = props
  return (
    <p className={`text-md sm:text-xl my-3 ${pose ? 'max-w-prose' : ''} ${className}`}>
      {children}
    </p>
  )
}

export default Component
