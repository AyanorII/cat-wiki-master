import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import bgMobile from "../public/images/hero-image-sm.png";
import bgTablet from "../public/images/hero-image-md.png";
import bgDesktop from "../public/images/hero-image-lg.png";
import Input from "./Input";

const Hero = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledCard>
      <StyledHero>
        <Wrapper>
          <StyledHeading>CatWiki</StyledHeading>
          <StyledParagraph>
            Get to know more about your cat breed
          </StyledParagraph>
          <Input
            name="breed"
            value={value}
            type="text"
            placeholder="Search"
            handleChange={handleChange}
          />
        </Wrapper>
      </StyledHero>
    </StyledCard>
  );
};

export default Hero;

const StyledCard = styled(Card)`
  border-radius: 30px 30px 0 0;
`;

const StyledHero = styled.section`
  background-image: url(${bgMobile.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  color: #fff;
  padding: 1.5rem 2rem;

  @media (min-width: 768px) {
    background-image: url(${bgTablet.src});
    padding: 4rem 3.5rem;
  }

  @media (min-width: 1024px) {
    background-image: url(${bgDesktop.src});
    padding: 6rem 4.5rem;
  }
`;

const StyledHeading = styled.h1`
  font-family: "Mystery Quest", cursive;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
    line-height: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    line-height: 2.75rem;
  }

  @media (min-width: 1440px) {
    font-size: 3rem;
    line-height: 3.25rem;
    margin-bottom: 0.5rem;
  }
`;

const StyledParagraph = styled.p`
  font-weight: 500;
  font-size: 0.625rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const Wrapper = styled.div`
  width: 50%;
  display: grid;
  gap: 0.5rem;

  * {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;
