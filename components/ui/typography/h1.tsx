import ProseBase, { Props as ProseBaseProps } from '@/components/ui/typography/proseBase'

export interface Props extends ProseBaseProps {
  children: JSX.Element | JSX.Element[] | string
}

const Component = (props: Props) => {
  const { children, ...proseBaseProps } = props

  return (
    <ProseBase {...proseBaseProps}>
      <h1 className="!mb-2">{children}</h1>
    </ProseBase>
  )
}

export default Component
