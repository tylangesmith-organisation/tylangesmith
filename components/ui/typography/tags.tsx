export interface Props {
  children: string[]
}

const Component = (props: Props) => {
  const { children } = props
  return (
    <div className="flex flex-wrap mb-2 space-x-2">
      {
          children.map((tag) => {
            return (<div key={tag} className="px-3 py-1 rounded-none bg-blue-600 text-gray-50 text-lg">{tag}</div>)
          })
        }
    </div>
  )
}

export default Component
