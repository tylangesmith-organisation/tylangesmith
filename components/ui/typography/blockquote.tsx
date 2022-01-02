import ProseBase, { Props as ProseBaseProps } from '@/components/ui/typography/proseBase'

export interface Props extends ProseBaseProps {
  children: JSX.Element | JSX.Element[] | string
}

const Component = (props: Props) => {
  const { children, ...proseBaseProps } = props

  return (
    <ProseBase {...proseBaseProps}>
      <blockquote className="!font-normal !border-blue-600 bg-gray-50">{children}</blockquote>
    </ProseBase>
  )
}

export default Component
