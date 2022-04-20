import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BallTriangle } from "react-loader-spinner";

type Props = {
  limit: number;
};

const BallTriangles = ({ limit }: Props) => {
  const spinnerNumber: JSX.Element[] = [];

  for (let i = 0; i < limit; i++) {
    spinnerNumber.push(
      <BallTriangle
        height="100%"
        width="100%"
        color="grey"
        ariaLabel="loading-indicator"
      />
    );
  }

  return (
    <StyledGrid>
      {spinnerNumber.map((spinner, index) => {
        return <div key={index}>{spinner}</div>;
      })}
    </StyledGrid>
  );
};

export default BallTriangles;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1rem;
`;
