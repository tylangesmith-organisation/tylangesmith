export interface Props {
  source: string;
  label?: string;
  alt?: string | undefined;
  shadow?: boolean;
}

const Component = (props: Props): JSX.Element => {
  const { source, label, alt, shadow = false } = props

  return (
    <div className="flex flex-col mx-auto max-w-5xl 2xl:my-6">
      <img
          className={`my-6 px-1 w-full ${shadow ? 'shadow-md' : ''}`}
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
