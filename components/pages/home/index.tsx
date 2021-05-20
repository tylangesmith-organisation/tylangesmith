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

    <Container padding={false}>
      <div className="my-8 md:my-28">
        <Image
          className="sm:rounded shadow-md"
          lowQualitySource="/home/home-hero-low-res.png"
          highQualitySource="/home/home-hero-high-res.png"
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
          Once you spend a few years within this industry it becomes apparent
          how quickly the landscape changes. Naturally, as a young ambitious
          engineer, I've always strived to continually learn and keep up with
          industry trends.
        </Paragraph>

        <Paragraph>
          However, doing this for a while it becomes apparent that there is{" "}
          <span className="italic">a lot</span> of content out there. Sometimes
          the content is delivered well by industry experts and other times it
          fails to meet the standard you were hoping for.
        </Paragraph>

        <Paragraph>
          This website is my attempt at delivering high-quality content on a
          wide range of topics relating to the best industry in the world.
        </Paragraph>

        <Paragraph>
          So join me on my journey as I explore all things computer science,
          engineering, business, and entrepreneurship.
        </Paragraph>

        <Paragraph>
          <div className="flex items-center justify-center">
            <Emoji symbol="✌️" label="peace" />
          </div>
        </Paragraph>
      </div>
    </Container>
  </StandardLayout>
);

export default Component;
