import React from "react";

export interface Props {
  company: string;
  title: string;
  date: string;
}

const Component = (props: Props): JSX.Element => {
  const { company, title, date } = props;
  return (
    <div className="flex">
      <h3 className="text-gray-900 mr-2">
        {company} - {title}
      </h3>
      <h3 className="font-light text-gray-900 flex-grow text-right">{date}</h3>
    </div>
  );
};

export default Component;
