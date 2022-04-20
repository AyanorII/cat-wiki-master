import React from "react";
import styled from "styled-components";

export type BarType = {
  filled?: boolean;
};

const StatsBar = ({ filled }: BarType) => {
  return <Bar filled={filled} />;
};

export default StatsBar;

const Bar = styled.div<BarType>`
  width: 60px;
  height: 12px;
  border-radius: 15px;
  background-color: ${(props) => (props.filled ? "#544439" : "#E0E0E0")};
`;
