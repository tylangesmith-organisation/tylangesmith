import ProseBase, { Props as ProseBaseProps } from './proseBase'

export interface Props extends ProseBaseProps {
  children: string[]
}

const Component = (props: Props) => {
  const { children, ...proseBaseProps } = props
  return (
    <ProseBase {...proseBaseProps}>
      <div className="flex flex-wrap mb-2 space-x-2">
        {
          children.map((tag) => {
            return (<div key={tag} className="px-3 py-1 rounded-none bg-blue-600 text-coolGray-50 text-lg">{tag}</div>)
          })
        }
      </div>
    </ProseBase>
  )
}

export default Component
