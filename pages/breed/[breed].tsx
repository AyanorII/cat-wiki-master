import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { BreedInfo } from "../../lib/types";
import DetailsInfo from "../../components/Breed/DetailsInfo";
import Stats from "../../components/Breed/Stats";
import BreedGallery from "../../components/Breed/BreedGallery";
import BreedImage from "../../components/Breed/BreedImage";
import BallTriangles from "../../components/LoadingSpinners/BallTriangles";

type ImageType = {
  id: string;
  url: string;
  breeds: [BreedInfo];
  width: number;
  height: number;
};

const Breed = () => {
  const router = useRouter();
  const breedName = router.query.breed as string;

  const [breedInfo, setBreedInfo] = useState<BreedInfo>();
  const [imageInfo, setImageInfo] = useState<ImageType>();

  // Fetch breed info
  useEffect(() => {
    const infoUrl = `https://api.thecatapi.com/v1/breeds/${breedName}`;
    fetch(infoUrl)
      .then((res) => res.json())
      .then((data) => {
        setBreedInfo(data);
      });
  }, [breedName]);

  // Fetch breed image data
  useEffect(() => {
    breedInfo &&
      fetch(`https://api.thecatapi.com/v1/images/${breedInfo.reference_image_id}`)
        .then((res) => res.json())
        .then((imageData: ImageType) => setImageInfo(imageData));
  }, [breedInfo]);

  return (
    <StyledPage>
      {breedInfo && imageInfo ? (
        <>
          <BreedImage
            src={imageInfo.url}
            alt={breedInfo.alt_names}
            className="breed-image"
          />
          <DetailsInfo
            name={breedInfo.name}
            description={breedInfo.description}
            className="breed-info"
          />
          <Stats stats={breedInfo} className="breed-stats" />
          <BreedGallery breed={breedInfo.id} className="breed-gallery" />
        </>
      ) : (

        <BallTriangles limit={6} />
      )}
    </StyledPage>
  );
};

export default Breed;

const StyledPage = styled.div`
  display: grid;
  gap: 3rem;

  .spinner {
    justify-self: center;
  }

  @media (min-width: 768px) {
    grid-template-columns: 0.75fr 1fr;

    .breed-info {
      align-self: center;
    }

    .breed-stats,
    .breed-gallery,
    .spinner {
      grid-column: 1 / -1;
    }
  }

  @media (min-width: 1024px) {
    column-gap: 10%;

    .breed-info, .breed-stats {
      grid-column: 2 / -1;
    }

    .breed-info {
      align-self: start;
      grid-row: 1 / 2;
    }

    .breed-stats {
      grid-row: 2 / 3;
    }

    .breed-image {
      grid-row: 1 / 3
    }
  }
`;
