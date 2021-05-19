import React from "react";

export interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

const Component = (props: Props) => {
  const { children } = props;
  return <div className="container mx-auto 2xl:max-w-7xl">{children}</div>;
};

export default Component;
