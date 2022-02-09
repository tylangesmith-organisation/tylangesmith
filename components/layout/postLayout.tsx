import { NextSeo } from 'next-seo'

import Navigation from '@/components/ui/navigation/navigation'
import Footer from '@/components/ui/footer/footer'
import Container from '@/components/ui/container/container'
import { PostMetaData } from '@/models/post'
import Tags from '@/components/ui/typography/tags'
import ProseWidth from '@/components/ui/container/proseWidth'

export interface Props extends PostMetaData {
  children: JSX.Element | JSX.Element[] | string
}

const Component = (props: Props) => {
  const { children, title, tags, description, slug, headerImage } = props

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={
          {
            title,
            description,
            url: `https://tylangesmith.com/${slug}/`,
            type: 'article',
            article: {
              tags: tags,
              authors: [
                'https://github.com/tylangesmith/'
              ]
            },
            images: [
              {
                url: headerImage
              }
            ]
          }
        }
      />
      <div className="flex flex-col h-screen break-words">
        <Navigation />
        <main className="flex-grow">
          <Container>
            <article className="flex flex-col mx-auto">
              <ProseWidth>
                <h1 className="mb-3">{title}</h1>
                <Tags>{tags}</Tags>
              </ProseWidth>
              {children}
            </article>
          </Container>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Component
