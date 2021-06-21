import StandardLayout from '../../layout/standardLayout'
import Image from '../../ui/image/image'
import Label from '../../ui/image/label'
import Section from '../../ui/structure/section'
import H1 from '../../ui/typography/h1'
import H2 from '../../ui/typography/h2'
import P from '../../ui/typography/p'
import Link from './link'
import CopyToClipboard from './copyToClipboard'
import WorkExperience from './workExperience'
import Education from './education'
import Emoji from '../../ui/emoji/emoji'

const Component = (): JSX.Element => (
  <StandardLayout>
    <Section>
      <div className="flex flex-col items-start">
        <div className="flex flex-col w-full md:flex-row-reverse md:items-center">
          <div className="text-right md:flex-grow">
            <Link href="/hireMe/cv.pdf" newTab>
              <Emoji label="Download CV" symbol="👉" /> Download CV
            </Link>
          </div>
          <H1>
            Ty Lange-Smith
          </H1>
        </div>
        <CopyToClipboard>tylangesmith@gmail.com</CopyToClipboard>
        <Link href="https://github.com/tylangesmith-organisation" newTab>
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/tylangesmith/" newTab>
          LinkedIn
        </Link>
      </div>

      <P prose>
        An enthusiastic software engineer with a passion for DevOps, AWS,
        Data, Machine Learning and Entrepreneurship. Through applying a
        diverse well-rounded skill set I&apos;m able to solve challenging problems
        at scale. I&apos;m an advocate for DevOps and have a proven history in
        enabling companies drive this paradigm shift.
      </P>
    </Section>

    <Section>
      <H2 className="font-extrabold">Work Experience</H2>

      <WorkExperience
        company="nib Group"
        title="DevOps Engineer"
        date="2019 - now"
        highlights={[
          'Designed, developed, and maintained business-critical infrastructure leveraging best-in-class tooling and modern cloud approaches.',
          'Continually championed DevOps best practices bringing subject matter expertise to both technical and non-technical forums.',
          'Drive the development of internal platform tooling to increase the velocity and confidence when delivering business initiatives while ensuring best practice guard rails.',
          'Key technical resource in delivering major business projects e.g. on-premise data center to cloud migrations, call center migrations leveraging AWS Connect, and building out data and machine learning capabilities.',
          'On-call engineer supporting business-critical workloads across a wide array of infrastructure.'
        ]}
        skills={[
          'development operations',
          'software engineering',
          'aws',
          'cdk',
          'ci / cd',
          'evangelism'
        ]}
      />

      <WorkExperience
        company="ION Group"
        title="Full Stack Software Engineer"
        date="2018 - 2019"
        highlights={[
          'Designed and implemented a wide range of software products within the commodity logistics domain.',
          'Worked with a variety of full-stack technologies within a fast-paced agile team environment.',
          'Introduced numerous internal development tools and processes to increase developer productivity and confidence.'
        ]}
        skills={[
          'software engineering',
          'c#',
          'full stack',
          'solid',
          'mssql',
          'developer productivity'
        ]}
      />

      <WorkExperience
        company="Social Pinpoint"
        title="Full Stack Software Engineer"
        date="2017 - 2018"
        highlights={[
          'One of two engineers working on a large-scale web application delivering value to thousands of daily users.',
          'Worked within a fast-paced startup environment, hands-on experience with the entire software development lifecycle.'
        ]}
        skills={[
          'software engineering',
          'startup',
          'entrepreneurship',
          'communication'
        ]}
      />

      <WorkExperience
        company="Wipro"
        title="Industry Scholar"
        date="2015 - 2017"
        highlights={[
          'The only chosen candidate out of the entire Software Engineering, Computer Science and IT cohort to be awarded this industry scholarship.',
          'Provided invaluable hands-on industry experience early within my software career where I was able to work with numerous experienced mentors.'
        ]}
        skills={[
          'software engineering',
          'industry scholarship',
          'real world experience'
        ]}
      />
    </Section>

    <Section>
      <H2 className="font-extrabold">Education</H2>
      <Education
        name="The University of Newcastle"
        location="Callaghan, NSW"
        date="2014 - 2017"
        highlights={[
          'Bachelor of Engineering (Honours) (Software) with Honours Class I'
        ]}
      />
    </Section>

    <Section>
      <div className="w-96 mx-auto">
        <Image
          className="sm:rounded shadow-md"
          lowQualitySource="/hireMe/hire-me-hero-low-res.jpg"
          highQualitySource="/hireMe/hire-me-hero-high-res.jpg"
          alt="🏝🏝🏝🏝"
        />
        <Label>🏝🏝🏝🏝</Label>
      </div>
    </Section>
  </StandardLayout>
)

export default Component
