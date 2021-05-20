import React from "react";
import StandardLayout from "../../layout/standardLayout";
import Container from "../../ui/container/container";
import Emoji from "../../ui/emoji/emoji";
import Heading from "./heading";
import SubHeading from "./subHeading";
import Image from "../../ui/image/image";

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
          className="sm:rounded"
          lowQualitySource="/hero-low-res.png"
          highQualitySource="/hero-high-res.png"
          alt="Crescent Head Beach"
        />
      </div>
    </Container>
  </StandardLayout>
);

export default Component;
