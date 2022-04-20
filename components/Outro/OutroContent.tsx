import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

type Props = {};

const OutroContent = (props: Props) => {
  return (
    <StyledContent>
      <StyledHeading>Why should you have a cat?</StyledHeading>
      <StyledParagraph>
        Having a cat around you can actually trigger the release of calming
        chemicals in your body which lower your stress and anxiety levels
      </StyledParagraph>
      <Link href="/" passHref>
        <StyledLink>
          Read More
          <BsArrowRight />
        </StyledLink>
      </Link>
    </StyledContent>
  );
};

export default OutroContent;

const StyledContent = styled.div`
  display: grid;
  gap: 1.6875rem;
  color: #291507;
  position: relative;
  margin-bottom: 3.9375rem;

  &::before {
    content: "";
    height: 3px;
    width: 15%;
    background-color: #4d270c;
    position: absolute;
    top: -10px;
    left: 0;
  }
`;

const StyledHeading = styled.h2`
  font-size: 2.5rem;
  line-height: 48px;
  margin-bottom: 1rem;
`;

const StyledParagraph = styled.p`
  font-size: 1.125rem;
  line-height: 22px;
  font-weight: 500;
`;

const StyledLink = styled.a`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 6rem;
    transform: translateY(-50%);
  }
`;
