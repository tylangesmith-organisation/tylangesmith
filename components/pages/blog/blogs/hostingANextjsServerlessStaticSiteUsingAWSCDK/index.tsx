import StandardLayout from '../../../../layout/standardLayout'
import Section from '../../../../ui/structure/section'
import H2 from '../../../../ui/typography/h2'
import { BlogMetaData } from '../../index'
import Header from '../../header/header'

export interface Props {
  blogMetaData: BlogMetaData
}

const Component = (props: Props): JSX.Element => {
  const { blogMetaData } = props

  return (
    <StandardLayout>
      <Section>
        <Header blogMetaData={blogMetaData} />
      </Section>

      <Section>
        <H2>HERE</H2>
      </Section>
    </StandardLayout>
  )
}

export default Component
