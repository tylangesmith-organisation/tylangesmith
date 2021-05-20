import React from "react";
import Navigation from "../ui/navigation/navigation";
import Footer from "../ui/footer/footer";

export interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

const Component = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <Navigation />
      <div className="mt-4">{children}</div>
      <Footer />
    </div>
  );
};

export default Component;
