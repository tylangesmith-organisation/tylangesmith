import React from "react";
import Image from "next/image";
import StandardLayout from "../../layout/standardLayout";
import Container from "../../ui/container/container";
import Emoji from "../../ui/emoji/emoji";
import Heading from "./heading";
import SubHeading from "./subHeading";

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
      <div className="my-10 md:my-28">
        <Image
          className="sm:rounded"
          src="/hero.png"
          layout="responsive"
          width={16}
          height={9}
          alt="Crescent Head Beach"
          unoptimized
        />
      </div>
    </Container>
  </StandardLayout>
);

export default Component;
