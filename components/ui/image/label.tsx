import React from "react";

export interface Props {
  children: string;
}

const Component = (props: Props): JSX.Element => {
  const { children } = props;

  return (
    <div className="w-full flex items-center justify-center mt-2 sm:mt-4">
      <label className="font-light text-sm text-gray-400">{children}</label>
    </div>
  );
};

export default Component;
