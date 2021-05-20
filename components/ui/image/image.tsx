import React from "react";
import { useProgressiveImageLoad } from "../../hooks/progressiveImageLoad/useProgressiveImageLoad";

export interface Props {
  className?: string;
  lowQualitySource: string;
  highQualitySource: string;
  alt?: string | undefined;
}

const Component = (props: Props): JSX.Element => {
  const { lowQualitySource, highQualitySource, className, alt } = props;

  const { source, blur } = useProgressiveImageLoad({
    lowQualitySource,
    highQualitySource,
  });

  return (
    <img
      className={`${className} w-full ${
        blur
          ? "filter blur-md transition duration-500"
          : "filter blur-0 transition duration-500"
      }`}
      src={source}
      alt={alt}
    />
  );
};

export default Component;
