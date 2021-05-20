import React from "react";

export interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
}

const Component = (props: Props): JSX.Element => {
  const { children } = props;
  return (
    <h2 className="font-medium text-xl md:text-2xl my-3 text-gray-600">
      {children}
    </h2>
  );
};

export default Component;
