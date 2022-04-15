import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <Logo className="invert" />
      <Copyright>
        <StyledIcon />
        <div>
          Created by
          <span className="name"> Ayanori Toyoda</span> - devChallenge.io 2021
        </div>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  color: #fff;
  background-color: #000;
  border-radius: 15px 15px 0 0;
  display: grid;
  gap: 1.3125rem;
  justify-content: space-between;
  align-items: center;
  padding: 2.25rem 0 1.5rem 2rem;
  text-align: left;

  span {
    justify-self: flex-start;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledIcon = styled(AiOutlineCopyrightCircle)`
  font-size: 2rem;
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  gap: 0.5rem;
  overflow-wrap: break-word;

  .name {
    font-weight: 700;
    text-decoration: underline;
  }
`;
