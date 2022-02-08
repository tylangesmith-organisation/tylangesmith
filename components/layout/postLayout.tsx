import { NextSeo } from 'next-seo'
import Head from 'next/head'

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
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏼‍💻</text></svg>" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={
          {
            url: `https://tylangesmith.com/${slug}/`,
            title,
            description,
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
