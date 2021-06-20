import BlogLayout from '../../../layout/blogLayout'
import Section from '../../../ui/blog/section/section'
import H1 from '../../../ui/blog/typography/h1'

const Component = (): JSX.Element => (
  <BlogLayout>
    <Section>
      <H1>
        Hosting a nextjs serverless static site using AWS CDK
      </H1>
    </Section>
  </BlogLayout>
)

export default Component
