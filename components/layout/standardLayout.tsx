import { NextSeo } from 'next-seo'

import Navigation from '@/components/ui/navigation/navigation'
import Container from '@/components/ui/container/container'
import Footer from '@/components/ui/footer/footer'

export interface Props {
  children: JSX.Element | JSX.Element[] | string
}

const Component = (props: Props) => {
  const { children } = props

  const title = 'tylangesmith.com'
  const description = 'A Machine Learning Engineer based in Australia 🦘'

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        additionalLinkTags={
          [
            {
              rel: 'icon',
              href: '"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏼‍💻</text></svg>"'
            }
          ]
        }
        openGraph={
          {
            url: 'https://tylangesmith.com/',
            title,
            description
          }
        }
      />
      <div className="flex flex-col h-screen break-words">
        <Navigation />
        <main className="flex-grow">
          <Container>
            <div className="flex flex-col prose max-w-none">
              {children}
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Component
