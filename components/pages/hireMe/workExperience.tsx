import WorkExperienceTitle from './workExperienceTitle'
import PillList from '../../ui/pill/pillList'

export interface Props {
  company: string;
  title: string;
  date: string;
  highlights: string[];
  skills: string[];
}

const Component = (props: Props): JSX.Element => {
  const { company, title, date, highlights, skills } = props
  return (
    <div className="mb-8 md:mb-14">
      <WorkExperienceTitle company={company} title={title} date={date} />
      <ul className="ml-4 text-lg list-disc list-outside max-w-prose">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
      <PillList items={skills} />
    </div>
  )
}

export default Component
