import { useState, useEffect } from "react";

export interface Props {
  lowQualitySource: string;
  highQualitySource: string;
}

export interface Return {
  source: string;
  blur: boolean;
}

export const useProgressiveImageLoad = (props: Props): Return => {
  const { lowQualitySource, highQualitySource } = props;

  const [source, setSource] = useState(lowQualitySource);

  useEffect(() => {
    setSource(source);

    const image = new Image();
    image.src = highQualitySource;
    image.onload = () => {
      setSource(highQualitySource);
    };
  }, [lowQualitySource, highQualitySource]);

  return {
    source,
    blur: source === lowQualitySource,
  };
};
