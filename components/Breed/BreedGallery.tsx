import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BreedImageType } from "../../lib/types";
import Card from "../Card";

type Props = {
  breed: string;
  className: string;
};

const BreedGallery = ({ breed, className }: Props) => {
  const [images, setImages] = useState<BreedImageType[]>([]);

  useEffect(() => {
    const url = `https://api.thecatapi.com/v1/images/search/?breed_ids=${breed}&limit=8`;

    const headers = {
      "X-API-KEY": process.env.API_KEY!,
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    const options = {
      method: "GET",
      headers,
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, [breed]);

  return (
    <Wrapper className={className}>
      <StyledHeading>Other photos</StyledHeading>
      <StyledGallery>
        {images &&
          images.map((image) => {
            return (
              <Card key={image.url}>
                <Image
                  src={image.url}
                  width="150"
                  height="150"
                  layout="responsive"
                  alt={image.breeds[0].name}
                />
              </Card>
            );
          })}
      </StyledGallery>
    </Wrapper>
  );
};

export default BreedGallery;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 9.375rem;
`;

const StyledHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.875rem;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`;
