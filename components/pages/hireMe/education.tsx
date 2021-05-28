import EducationTitle from './educationTitle'

export interface Props {
  name: string;
  location: string;
  date: string;
  highlights: string[];
}

const Component = (props: Props): JSX.Element => {
  const { name, location, date, highlights } = props
  return (
    <div className="mb-8 md:mb-14">
      <EducationTitle name={name} location={location} date={date} />
      <ul className="ml-4 text-lg list-disc list-outside max-w-prose">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  )
}

export default Component
