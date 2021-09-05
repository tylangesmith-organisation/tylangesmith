import { parse, format } from 'date-fns'
import Navigation from '../ui/navigation/navigation'
import Footer from '../ui/footer/footer'
import Container from '../ui/container/container'
import Section from '../ui/container/section'
import Tags from '../ui/tags/tags'
import Image from '../ui/image/image'

import H1 from '../ui/typography/h1'
import Time from '../ui/typography/time'
import P from '../ui/typography/p'

export interface Props {
  children: JSX.Element | JSX.Element[] | string
  title: string
  description: string
  date: string
  tags: string[]
  headerImageHighQualitySource: string
  headerImageLowQualitySource: string
  headerImageAlt: string
  headerImageLabel: string
}

const Component = (props: Props) => {
  const { children, title, description, date, tags } = props
  const { headerImageHighQualitySource, headerImageLowQualitySource, headerImageAlt, headerImageLabel } = props

  const parsedDate = parse(date, 'yyyy-MM-dd', new Date())

  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <main className="flex-grow">
        <Container>
          <article className="flex flex-col prose max-w-none">
            <Section>
              <H1>{title}</H1>
              <Time>{format(parsedDate, 'dd MMM yyyy')}</Time>
              <Tags tags={tags} />
              <P>{description}</P>
              <Image
                highQualitySource={headerImageHighQualitySource}
                lowQualitySource={headerImageLowQualitySource}
                label={headerImageLabel}
                alt={headerImageAlt}
              />
            </Section>
            {children}
          </article>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Component
