import ProseBase, { Props as ProseBaseProps } from '@/components/ui/typography/proseBase'

export interface Props extends ProseBaseProps {
  children: JSX.Element | JSX.Element[] | string
  className?: string
}

const Component = (props: Props) => {
  const { children, className, ...proseBaseProps } = props

  return (
    <ProseBase {...proseBaseProps}>
      <h2 className={`${className} !my-6`}>{children}</h2>
    </ProseBase>
  )
}

export default Component
