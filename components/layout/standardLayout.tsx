import React from "react";
import Navigation from "../ui/navigation/navigation";

export interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

const Component = (props: Props) => {
  const { children } = props;

  return (
    <div className="">
      <Navigation />
      <div className="">{children}</div>
    </div>
  );
};

export default Component;
