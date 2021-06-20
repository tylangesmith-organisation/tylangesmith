import StandardLayout from '../../../layout/standardLayout'
import Section from '../../../ui/section/section'

const Component = (): JSX.Element => (
  <StandardLayout>
    <Section>
      <h1 className="font-extrabold text-2xl md:text-4xl my-3 md:my-4">
        Hosting a nextjs serverless static site using AWS CDK
      </h1>
    </Section>
  </StandardLayout>
)

export default Component
