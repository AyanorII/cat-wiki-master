import React from "react";
import styled from "styled-components";

type Props = {
  children: JSX.Element;
};

const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 88%;
  }

  @media (min-width: 1440px) {
    width: 86%;
  }

  @media (min-width: 1920px) {
    width: 80%;
  }
`;
