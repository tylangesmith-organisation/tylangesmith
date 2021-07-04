import StandardLayout from '../../../../layout/standardLayout'
import Section from '../../../../ui/structure/section'
import { BlogMetaData } from '../../index'
import Header from '../../header/header'
import H2 from '../../../../ui/typography/h2'
import P from '../../../../ui/typography/p'
import A from '../../../../ui/typography/a'
import Image from '../../../../ui/image/image'
import Label from '../../../../ui/image/label'

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

      <Section padding={false}>
        <Image
          className="sm:rounded shadow-md"
          lowQualitySource=""
          highQualitySource="/blog/hostingANextjsServerlessStaticSiteUsingAWSCDK/header.jpg"
          alt="Crescent Head Beach"
        />
        <Label>
          A rare sight of me doing something other than software stuff
        </Label>
      </Section>

      <Section>
        <H2 id="introduction" href="#introduction">Introduction</H2>
        <P>For a while, I've wanted to start a personal blog. As a professional, this is one of the best ways to get your expertise and name out into the world. So I thought why not give it a go!</P>
        <P>For now, I've chosen to implement this blog using <A href="https://nextjs.org" newTab>Next.js</A>, which is a popular web development framework built on top of React. It provides many features right out of the box, has an exceptional developer experience, and has a large development community.</P>
        <P>Currently, I work with <A href="https://aws.amazon.com" newTab>AWS</A> daily. So naturally, it makes sense to design and implement a solution to host my blog using this cloud ecosystem.</P>
        <P>It's also worth noting that there are a fair few other hosting options available e.g. <A href="https://vercel.com" newTab>Vercel</A>. However, these options tend to abstract away a lot of the underlying infrastructure and ultimately provide developers with less understanding of how their applications are deployed. This has its target audience but for us, a <span className="italic">one-click hosting solution</span> doesn't sound like much fun.</P>
        <P>All of the code for this blog can be found on my <A href="https://github.com/tylangesmith-organisation/tylangesmith" newTab>GitHub</A>.</P>
      </Section>

      <Section>
        <H2 id="nextjs-implementation" href="#nextjs-implementation">Next.js Implementation</H2>
      </Section>

      <Section>
        <H2 id="solution-architecture" href="#solution-architecture">Solution Architecture</H2>
      </Section>

      <Section>
        <H2 id="aws-infrastructure" href="#aws-infrastructure">AWS Infrastructure</H2>
      </Section>

      <Section>
        <H2 id="closing-thoughts" href="#closing-thoughts">Closing Thoughts</H2>
      </Section>
    </StandardLayout>
  )
}

export default Component
