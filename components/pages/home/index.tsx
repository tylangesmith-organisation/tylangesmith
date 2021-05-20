import React from "react";
import StandardLayout from "../../layout/standardLayout";
import Container from "../../ui/container/container";
import Emoji from "../../ui/emoji/emoji";
import Heading from "./heading";
import SubHeading from "./subHeading";
import Paragraph from "./paragraph";
import Image from "../../ui/image/image";
import Label from "../../ui/image/label";

const Component = (): JSX.Element => (
  <StandardLayout>
    {/* Headings Container */}
    <Container>
      <div className="mt-10 md:mt-28 max-w-prose">
        <Heading>
          Hey <Emoji symbol="👋" label="wave emoji" />, I'm Ty Lange-Smith. I'm
          a software engineer based in Australia.
        </Heading>

        <SubHeading>
          Those who know me would say I'm passionate about DevOps, AWS, Data,
          Machine Learning and Entrepreneurship{" "}
          <Emoji symbol="🚀" label="rocket emoji" />
        </SubHeading>
      </div>
    </Container>

    {/* Image Container */}
    <Container padding={false}>
      <div className="my-8 md:my-28">
        <Image
          className="sm:rounded shadow-md"
          lowQualitySource="/hero-low-res.png"
          highQualitySource="/hero-high-res.png"
          alt="Crescent Head Beach"
        />
        <Label>
          A rare sight of me doing something other than software stuff
        </Label>
      </div>
    </Container>

    <Container>
      <div className="my-10 md:my-28">
        <Paragraph>
          Coming from a strong DevOps background I understand the importance of
          cultural DevOps adoption. I have a proven history of helping companies
          drive DevOps culture, engaging with various technical and
          non-technical stakeholders across a range of different team
          topologies.
        </Paragraph>
        <Paragraph>
          I have seen firsthand the benefits companies gain from this adoption.
          Whether it be the ability to pivot and experiment with best in class
          tooling or be the first to market delivering value with velocity and
          confidence.
        </Paragraph>
      </div>
    </Container>
  </StandardLayout>
);

export default Component;
