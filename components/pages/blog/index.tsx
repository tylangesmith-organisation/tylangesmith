import StandardLayout from '../../layout/standardLayout'
import Section from '../../ui/section/section'
import BlogCard from './blogCard'

export interface BlogMetaData {
  title: string;
  description: string;
  slug: string;
  keywords: string[];
  date: string;
}

export interface Props {
  blogsMetaData: BlogMetaData[]
}

const Component = (props: Props): JSX.Element => {
  const { blogsMetaData } = props

  return (
    <StandardLayout>
      <Section>
        <h1 className="font-extrabold text-2xl md:text-4xl my-3 md:my-4">
          Blog
        </h1>
        {
          blogsMetaData.map((blogMetaData) => {
            const { title, description, slug, keywords, date } = blogMetaData
            return (
              <BlogCard key={slug} title={title} description={description} slug={slug} keywords={keywords} date={date} />
            )
          })
        }
      </Section>
    </StandardLayout>
  )
}

export default Component
