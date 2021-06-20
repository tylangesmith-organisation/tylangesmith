
export interface Props {
  items: string[];
}

const Component = (props: Props): JSX.Element => {
  const { items } = props
  return (
    <div className="flex flex-wrap items-center my-1">
      {items.map((item, index) => (
        <div
          className="bg-black text-white text-sm rounded px-3 py-1 mx-1 my-1"
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default Component
