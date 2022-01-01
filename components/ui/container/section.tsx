
export interface Props {
  children: any;
}

const Component = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <div className='flex flex-col max-w-none !mb-8'>
      {children}
    </div>
  )
}

export default Component
