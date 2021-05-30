
export interface Props {
  company: string;
  title: string;
  date: string;
}

const Component = (props: Props): JSX.Element => {
  const { company, title, date } = props
  return (
    <div className="flex flex-wrap flex-col mb-2 md:flex-row">
      <h3 className="font-semibold mr-2">
        {company} - {title}
      </h3>
      <h3 className="font-light text-gray-900 flex-grow text-left md:text-right">
        {date}
      </h3>
    </div>
  )
}

export default Component
