
export interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
}

const Component = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <h1 className="font-extrabold text-2xl md:text-4xl my-3 md:my-4">
      {children}
    </h1>
  )
}

export default Component
