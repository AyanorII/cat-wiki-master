import React from "react";
import styled from "styled-components";
import { BreedInfo } from "../../lib/types";
import StatsBars from "./StatsBars";

type Props = {
  stats: BreedInfo;
  className: string;
};

const statsWithBars = [
  "adaptability",
  "affection_level",
  "child_friendly",
  "grooming",
  "intelligence",
  "health_issues",
  "social_needs",
  "stranger_friendly",
];

const statsList = ["temperament", "origin", "life_span", ...statsWithBars];

const getFormattedStat = (stat: string): string => {
  return stat
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const Stats = ({ stats, className }: Props) => {

  return (
    <StyledList className={className}>
      {statsList.map((stat) => {
        return (
          <StyledItem key={stat}>
            <h3>{getFormattedStat(stat)}: </h3>
            {stats && statsWithBars.includes(stat) ? (
              <StatsBars statNumber={parseInt(stats[stat])} />
            ) : (
              <p>{stats[stat]}</p>
            )}
          </StyledItem>
        );
      })}
    </StyledList>
  );
};

export default Stats;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 2rem;
    grid-column: 1 / 3;
  }
`;

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;
