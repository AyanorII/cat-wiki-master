import React, { useState, useEffect } from "react";
import StatsBar from "./StatsBar";
import styled from "styled-components";

type Props = {
  statNumber: number;
};

const StatsBars = ({ statNumber }: Props) => {
  const [bars, setCounter] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const barsArr: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      barsArr.push(statNumber > i ? <StatsBar filled /> : <StatsBar />);
    }
    setCounter(barsArr);
  }, [statNumber]);

  return (
    <StyledUl>
      {bars.map((bar, index) => {
        return <li key={index}>{bar}</li>;
      })}
    </StyledUl>
  );
};

export default StatsBars;

const StyledUl = styled.ul`
  display: flex;
  gap: 0.5rem;
`;
