import React from "react";
import styled from "styled-components";
import Card from "../Card";
import DiscoverCards from "./DiscoverCards";

type Props = {};

const Discover = () => {
  return (
    <StyledSection>
      <>
        <StyledSpan>Most Searched Breeds</StyledSpan>
        <StyledHeading>66+ Breeds for you to Discover</StyledHeading>
        <DiscoverCards />
      </>
    </StyledSection>
  );
};

export default Discover;

const StyledSection = styled(Card)`
  color: #291507;
  background-color: #e3e1dc;
  padding: 1.125rem 1.875rem 3.375rem;
  border-radius: 0 0 30px 30px;
  display: grid;
  gap: 1rem;
  margin-bottom: 5.25rem;
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 15px;

  &::after {
    content: "";
    display: block;
    width: 15%;
    height: 3px;
    background-color: #4d270c;
    position: relative;
    top: 3px;
    border-radius: 3px;
  }
`;

const StyledHeading = styled.h2`
  font-size: 1.125rem;
  line-height: 1.375rem;
`;
