import { useProgressiveImageLoad } from '../../hooks/progressiveImageLoad/useProgressiveImageLoad'

export interface Props {
  className?: string;
  lowQualitySource: string;
  highQualitySource: string;
  label?: string;
  alt?: string | undefined;
}

const Component = (props: Props): JSX.Element => {
  const { className, lowQualitySource, highQualitySource, label, alt } = props

  const { source, blur } = useProgressiveImageLoad({
    lowQualitySource,
    highQualitySource
  })

  return (
    <div className="flex flex-col">
      <img
        className={`${className} !my-4 w-full shadow-md ${
          blur
            ? 'filter blur-md transition duration-300'
            : 'filter blur-0 transition duration-300'
        }`}
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
