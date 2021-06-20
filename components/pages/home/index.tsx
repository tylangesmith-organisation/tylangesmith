import StandardLayout from '../../layout/standardLayout'
import Emoji from '../../ui/emoji/emoji'
import H1 from '../../ui/typography/H1'
import H2 from '../../ui/typography/H2'
import P from '../../ui/typography/P'
import Image from '../../ui/image/image'
import Label from '../../ui/image/label'
import Section from '../../ui/structure/section'

const Component = (): JSX.Element => (
  <StandardLayout>
    <Section pose>
      <H1>
        Hey <Emoji symbol="👋" label="wave emoji" />, I&apos;m Ty Lange-Smith. I&apos;m a
        software engineer based in Australia.
      </H1>

      <H2>
        Those who know me would say I&apos;m passionate about DevOps, AWS, Data,
        Machine Learning and Entrepreneurship{' '}
        <Emoji symbol="🚀" label="rocket emoji" />
      </H2>
    </Section>

    <Section padding={false}>
      <Image
        className="sm:rounded shadow-md"
        lowQualitySource="/home/home-hero-low-res.png"
        highQualitySource="/home/home-hero-high-res.png"
        alt="Crescent Head Beach"
      />
      <Label>
        A rare sight of me doing something other than software stuff
      </Label>
    </Section>

    <Section>
      <P>
        Once you spend a few years within this industry it becomes apparent how
        quickly the landscape changes. Naturally, as a young ambitious engineer,
        I&apos;ve always strived to continually learn and keep up with industry
        trends.
      </P>

      <P>
        However, doing this for a while it becomes apparent that there is
        a lot of content out there. Sometimes
        the content is delivered well by industry experts and other times it
        fails to meet the standard you were hoping for.
      </P>

      <P>
        This website is my attempt at delivering high-quality content on a wide
        range of topics relating to the best industry in the world.
      </P>

      <P>
        So join me on my journey as I explore all things computer science,
        engineering, business, and entrepreneurship.
      </P>

      <P className="text-center">
        <Emoji symbol="✌️" label="peace" />
      </P>
    </Section>
  </StandardLayout>
)

export default Component
