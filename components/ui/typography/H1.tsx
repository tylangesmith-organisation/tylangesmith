import ProseBase from './proseBase'

export interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
  prose?: boolean;
}

const Component = (props: Props): JSX.Element => {
  const { children, prose = false } = props
  return (
    <ProseBase prose={prose}>
      <h1 className="font-extrabold text-2xl md:text-4xl my-2">
        {children}
      </h1>
    </ProseBase>
  )
}

export default Component
