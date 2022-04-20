import Image from "next/image";
import React from "react";
import styled from "styled-components";
import image1 from "../../public/images/image-1.png";
import image2 from "../../public/images/image-2.png";
import image3 from "../../public/images/image-3.png";

type Props = {};

const OutroImages = (props: Props) => {
  const images = [image2, image1, image3];
  return (
    <Wrapper>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          width={image.width}
          height={image.height}
          layout="responsive"
        />
      ))}
    </Wrapper>
  );
};

export default OutroImages;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  grid-template-rows: 0.5fr 1fr;
  column-gap: 1rem;
  align-items: start;
  margin-bottom: 1.375rem;

  span:nth-of-type(3) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

  img {
    object-fit: contain;
  }
`;
