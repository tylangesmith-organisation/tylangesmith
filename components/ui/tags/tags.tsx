import ProseWidth from '../../ui/container/proseWidth'

export interface Props {
  tags: string[]
}

const Component = (props: Props) => {
  const { tags } = props
  return (
    <ProseWidth proseWidth={true}>
      <div className="flex flex-wrap mb-4 space-x-2">
        {
        tags.map((tag) => {
          return (<div key={tag} className="px-3 py-1 rounded-none bg-blue-600 text-coolGray-50 text-lg">{tag}</div>)
        })
      }
      </div>
    </ProseWidth>
  )
}

export default Component
