import ProseBase, { Props as ProseBaseProps } from '@/components/ui/typography/proseBase'

export interface Props extends ProseBaseProps {
  children: JSX.Element | JSX.Element[] | string
}

const Component = (props: Props) => {
  const { children, ...proseBaseProps } = props

  return (
    <ProseBase {...proseBaseProps}>
      <h3 className="!mt-3">{children}</h3>
    </ProseBase>
  )
}

export default Component
