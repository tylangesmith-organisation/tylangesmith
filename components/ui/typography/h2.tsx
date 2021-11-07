import ProseBase, { Props as ProseBaseProps } from './proseBase'

export interface Props extends ProseBaseProps {
  children: JSX.Element | JSX.Element[] | string
}

const Component = (props: Props) => {
  const { children, ...proseBaseProps } = props

  return (
    <ProseBase{...proseBaseProps}>
      <h2 className="!mt-6">{children}</h2>
    </ProseBase>
  )
}

export default Component
