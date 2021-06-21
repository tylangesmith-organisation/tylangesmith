
export interface Props {
  prose?: boolean;
  children: JSX.Element | JSX.Element[] | string | any;
}

const Component = (props: Props): JSX.Element => {
  const { children, prose = false } = props
  return (
    <div className={`${prose ? 'max-w-prose' : ''}`}>
      {children}
    </div>
  )
}

export default Component
