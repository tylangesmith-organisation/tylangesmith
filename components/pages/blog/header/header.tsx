import H1 from '../../../ui/typography/h1'
import P from '../../../ui/typography/p'
import PillList from '../../../ui/pill/pillList'
import { BlogMetaData } from '../index'

export interface Props {
  blogMetaData: BlogMetaData
}

const Component = (props: Props): JSX.Element => {
  const { blogMetaData: { title, description, keywords, date } } = props

  return (
    <div>
      <H1 prose>{title}</H1>
      <P>{date}</P>
      <PillList items={keywords} />
      <P>{description}</P>
    </div>
  )
}

export default Component
