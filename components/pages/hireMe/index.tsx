import React from "react";
import StandardLayout from "../../layout/standardLayout";
import Image from "../../ui/image/image";
import Label from "../../ui/image/label";
import Section from "../../ui/section/section";
import Link from "./link";
import WorkExperienceTitle from "./workExperienceTitle";

const Component = (): JSX.Element => (
  <StandardLayout>
    <Section>
      {/* Contact Info */}
      <div className="flex flex-col items-start mb-2">
        <h1 className="font-extrabold text-2xl md:text-4xl my-2">
          Ty Lange-Smith
        </h1>
        <Link href="mailto:tylangesmith@gmail.com">Email</Link>
        <Link href="https://github.com/tylangesmith-organisation" newTab>
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/tylangesmith/" newTab>
          LinkedIn
        </Link>
      </div>
      <div className="max-w-prose">
        <p className="text-lg">
          An enthusiastic software engineer with a passion for DevOps, AWS,
          Data, Machine Learning and Entrepreneurship. Through applying a
          diverse well-rounded skill set I'm able to solve challenging problems
          at scale. I'm an advocate for DevOps and have a proven history in
          enabling companies drive this paradigm shift.
        </p>
      </div>
    </Section>

    {/* Work Experience */}
    <Section>
      <h2 className="text-lg font-extrabold">Work Experience</h2>
      <WorkExperienceTitle
        company="nib Group"
        title="DevOps Engineer"
        date="2019 - now"
      />
    </Section>

    <Section>
      <div className="w-96 mx-auto">
        <Image
          className="sm:rounded shadow-md"
          lowQualitySource="/hireMe/hire-me-hero-low-res.jpg"
          highQualitySource="/hireMe/hire-me-hero-high-res.jpg"
          alt="Somewhere in Bali"
        />
        <Label>Somewhere in Bali 💭</Label>
      </div>
    </Section>
  </StandardLayout>
);

export default Component;
