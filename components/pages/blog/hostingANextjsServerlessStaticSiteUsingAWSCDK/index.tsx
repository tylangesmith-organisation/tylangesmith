import StandardLayout from '../../../layout/standardLayout'
import Section from '../../../ui/structure/section'
import H1 from '../../../ui/typography/h1'
import P from '../../../ui/typography/p'
import PillList from '../../../ui/pill/pillList'
import { BlogMetaData } from '../index'

export interface Props {
  blogMetaData: BlogMetaData
}

const Component = (props: Props): JSX.Element => {
  const { blogMetaData: { title, description, keywords } } = props

  return (
    <StandardLayout>
      <Section>
        <H1 prose>{title}</H1>
        <P>{description}</P>
        <PillList items={keywords} />
      </Section>
    </StandardLayout>
  )
}

export default Component
