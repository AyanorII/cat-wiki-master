import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BreedInfo } from "../../lib/types";
import Card from "../../components/Card";
import BallTriangles from "../LoadingSpinners/BallTriangles";

const DiscoverCards = () => {
  const [breeds, setBreeds] = useState<BreedInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const url = "https://api.thecatapi.com/v1/breeds";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const firstFour = data.splice(0, 4);
        setBreeds(firstFour);
        setLoading(false);
      });
  }, [breeds]);

  // Framer motion
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <StyledGrid>
      {breeds && !loading ? (
        breeds.map((data) => {
          const { id, name, image } = data;

          return (
            <Wrapper
              key={id}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <Link href={`/breed/${id}`} passHref>
                <a>
                  <Card>
                    <Image
                      src={image.url}
                      layout="responsive"
                      width="100%"
                      height="100%"
                      alt={name}
                    />
                  </Card>
                  <StyledParagraph>{name}</StyledParagraph>
                </a>
              </Link>
            </Wrapper>
          );
        })
      ) : (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1, type: "linear" }}
        >
          <BallTriangles limit={4} />
        </motion.div>
      )}
    </StyledGrid>
  );
};

export default DiscoverCards;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 0.5rem;

  a {
    width: 100%;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 0.75rem;

  span,
  img {
    object-fit: cover;
    width: 100%;
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const StyledParagraph = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 14px;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 18px;
    margin-top: 0.75rem;
  }
`;
