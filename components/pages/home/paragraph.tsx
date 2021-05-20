import React from "react";

export interface Props {
  children: JSX.Element | JSX.Element[] | string | any;
}

const Component = (props: Props): JSX.Element => {
  const { children } = props;
  return (
    <p className="font-medium text-md sm:text-xl md:text-2xl my-3 text-gray-600">
      {children}
    </p>
  );
};

export default Component;
