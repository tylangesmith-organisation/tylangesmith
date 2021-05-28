
export interface Props {
  children: JSX.Element | JSX.Element[] | string;
  padding?: boolean;
}

const Component = (props: Props) => {
  const { children, padding = true } = props
  return (
    <div className={`container mx-auto 2xl:max-w-7xl ${padding ? 'px-4' : ''}`}>
      {children}
    </div>
  )
}

export default Component
