import ProseBase, { Props as ProseBaseProps } from './proseBase'

export interface Props extends ProseBaseProps {
  children: JSX.Element | JSX.Element[] | string
}

const Component = (props: Props) => {
  const { children, ...proseBaseProps } = props

  return (
    <ProseBase {...proseBaseProps}>
      <p className="!my-3 text-lg">{children}</p>
    </ProseBase>
  )
}

export default Component
