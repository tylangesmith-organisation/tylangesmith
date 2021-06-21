import Link from 'next/link'
import PillList from '../../../ui/pill/pillList'

export interface Props {
  title: string;
  description: string;
  slug: string;
  keywords: string[];
  date: string;
}

const Component = (props: Props): JSX.Element => {
  const { title, description, slug, keywords, date } = props

  return (
    <Link href={`/blog/${slug}`}>
      <div className="shadow my-4 px-4 py-6 border-2 cursor-pointer group">
        <p className="text-sm font-light">{date}</p>
        <h2 className="text-xl font-medium group-hover:underline">{title}</h2>
        <p className="text-gray-800 my-2">{description}</p>
        <PillList items={keywords} />
      </div>
    </Link>
  )
}

export default Component
