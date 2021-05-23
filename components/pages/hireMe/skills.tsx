import React from "react";

export interface Props {
  skills: string[];
}

const Component = (props: Props): JSX.Element => {
  const { skills } = props;
  return (
    <div className="flex flex-wrap items-center my-2">
      {skills.map((skill, index) => (
        <div
          className="bg-black text-white text-sm rounded px-3 py-1 mx-1 my-1"
          key={index}
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Component;
