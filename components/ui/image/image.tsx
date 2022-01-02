import ProseWidth from '@/components/ui/container/proseWidth'

export interface Props {
  className?: string;
  source: string;
  label?: string;
  alt?: string | undefined;
  prose?: boolean;
}

const Component = (props: Props): JSX.Element => {
  const { className, source, label, alt, prose = true } = props

  return (
    <ProseWidth proseWidth={prose}>
      <div className="flex flex-col -mx-4 xs:mx-0">
        <img
          className={`${className} !my-4 w-full shadow-md`}
          src={source}
          alt={alt}
        />
        {
          label && <label className="text-center text-gray-500 mb-4">{label}</label>
        }
      </div>
    </ProseWidth>
  )
}

export default Component
