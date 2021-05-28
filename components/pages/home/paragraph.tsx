
export interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
  className?: string;
}

const Component = (props: Props): JSX.Element => {
  const { children, className } = props
  return (
    <p
      className={`font-medium text-md sm:text-xl md:text-2xl my-3 text-gray-600 ${className}`}
    >
      {children}
    </p>
  )
}

export default Component
