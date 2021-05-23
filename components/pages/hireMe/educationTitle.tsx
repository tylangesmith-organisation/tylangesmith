import React from "react";

export interface Props {
  name: string;
  location: string;
  date: string;
}

const Component = (props: Props): JSX.Element => {
  const { name, location, date } = props;
  return (
    <div className="flex flex-wrap flex-col mb-2 md:flex-row">
      <h3 className="font-semibold mr-2">
        {name} - {location}
      </h3>
      <h3 className="font-light text-gray-900 flex-grow text-left md:text-right">
        {date}
      </h3>
    </div>
  );
};

export default Component;
