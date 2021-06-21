import ProseBase from './proseBase'

export interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
  className?: string;
  prose?: boolean;
}

const Component = (props: Props): JSX.Element => {
  const { children, className, prose = false } = props
  return (
    <ProseBase prose={prose}>
      <p className={`text-md sm:text-xl my-3 ${className}`}>
        {children}
      </p>
    </ProseBase>
  )
}

export default Component
