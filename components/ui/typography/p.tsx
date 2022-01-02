import ProseBase, { Props as ProseBaseProps } from '@/components/ui/typography/proseBase'

export interface Props extends ProseBaseProps {
  children: JSX.Element | JSX.Element[] | string
  className?: string
}

const Component = (props: Props) => {
  const { children, className, ...proseBaseProps } = props

  return (
    <ProseBase {...proseBaseProps}>
      <p className={`${className} !my-3 text-lg font-normal`}>{children}</p>
    </ProseBase>
  )
}

export default Component
