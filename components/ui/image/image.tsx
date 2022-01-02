export interface Props {
  source: string;
  label?: string;
  alt?: string | undefined;
}

const Component = (props: Props): JSX.Element => {
  const { source, label, alt } = props

  return (
    <div className="flex flex-col">
      <img
          className="my-4 w-full shadow-md"
          src={source}
          alt={alt}
        />
      {
          label && <label className="text-center text-gray-500 mb-4">{label}</label>
        }
    </div>
  )
}

export default Component
