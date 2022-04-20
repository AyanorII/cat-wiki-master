import React from "react";
import styled from "styled-components";

type Props = {
  name: string;
  description: string;
  className: string;
};

const DetailsInfo = ({ name, description, className }: Props) => {
  return (
    <div className={className}>
      <StyledHeading>{name}</StyledHeading>
      <StyledParagraph>{description}</StyledParagraph>
    </div>
  );
};

export default DetailsInfo;

const StyledHeading = styled.h1`
  font-weight: semi-bold;
  font-size: 1.5rem;
  line-height: 1.625rem;
  margin-bottom: 1.25rem;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 2.75rem;
    margin-bottom: 1.5625rem;
  }
`;

const StyledParagraph = styled.p`
  font-size: 0.875rem;
  font-weight: medium;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;
