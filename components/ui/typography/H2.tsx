
export interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
  className?: string;
}

const Component = (props: Props): JSX.Element => {
  const { children, className } = props
  return (
    <h2 className={`font-medium text-md sm:text-xl md:text-2xl my-3 ${className}`}>
      {children}
    </h2>
  )
}

export default Component
