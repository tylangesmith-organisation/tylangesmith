import React from "react";
import StandardLayout from "../../layout/standardLayout";
import Container from "../../ui/container/container";
import Image from "../../ui/image/image";
import Label from "../../ui/image/label";

const Component = (): JSX.Element => (
  <StandardLayout>
    <Container padding={false}>
      <div className="my-8 md:my-28 mx-auto w-96">
        <Image
          className="sm:rounded shadow-md"
          lowQualitySource="/hireMe/hire-me-hero-low-res.jpg"
          highQualitySource="/hireMe/hire-me-hero-high-res.jpg"
          alt="Somewhere in Bali"
        />
        <Label>Somewhere in Bali 💭</Label>
      </div>
    </Container>
  </StandardLayout>
);

export default Component;
