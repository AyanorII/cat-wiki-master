import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  margin-top: 0.75rem;
`;
