import React from "react";
import StandardLayout from "../../layout/standardLayout";
import Section from "../../ui/section/section";
import Emoji from "../../ui/emoji/emoji";

const Component = (): JSX.Element => (
  <StandardLayout>
    <Section>
      <h1 className="font-extrabold text-2xl md:text-4xl my-3 md:my-4">
        Coming Soon
      </h1>
      <h2 className="font-medium text-xl md:text-2xl my-3 text-gray-600">
        Ty's hard at work coding <Emoji symbol="👨‍💻" label="coding" />{" "}
        <Emoji symbol="🛠" label="construction" />
      </h2>
    </Section>
  </StandardLayout>
);

export default Component;
