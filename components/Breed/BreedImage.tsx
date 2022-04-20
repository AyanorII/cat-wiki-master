import React from "react";
import Card from "../Card";
import Image from "next/image";
import { RotatingSquare } from "react-loader-spinner";

type Props = {
  src: string;
  alt: string;
  className: string;
};

const BreedImage = ({ src, alt, className }: Props) => {
  return (
    <div className={className}>
      {src && (
        <Card>
          <Image
            src={src}
            width="370"
            height="370"
            layout="responsive"
            alt={alt}
          />
        </Card>
      )}
    </div>
  );
};

export default BreedImage;
