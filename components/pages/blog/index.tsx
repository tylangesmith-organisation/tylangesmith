import StandardLayout from '../../layout/standardLayout'
import Section from '../../ui/structure/section'
import BlogCard from './card/blogCard'
import H1 from '../../ui/typography/h1'

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
        <H1>
          Blog
        </H1>
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
