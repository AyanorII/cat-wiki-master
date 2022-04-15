import React from "react";
import logo from "../public/logo.svg";
import Image from "next/image";
import styled from "styled-components";

type Props = {
  className?: "invert" | undefined;
};

const Logo = ({ className }: Props) => {
  return <StyledImage className={className} src={logo} />;
};

export default Logo;

const StyledImage = styled(Image) <Props>`
  &.invert {
    filter: invert(99%) sepia(39%) saturate(2%) hue-rotate(89deg)
      brightness(113%) contrast(100%);
  }
`;
