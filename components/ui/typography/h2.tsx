import ProseBase from './proseBase'

export interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
  className?: string;
  prose?: boolean;
  id?: string;
}

const Component = (props: Props): JSX.Element => {
  const { children, className, prose = false, id } = props
  return (
    <ProseBase prose={prose}>
      <h2 id={id} className={`font-medium text-md sm:text-xl md:text-2xl my-3 ${className}`}>
        {children}
      </h2>
    </ProseBase>
  )
}

export default Component
