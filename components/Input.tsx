import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {
  name: string;
  type: "text" | string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ name, type, placeholder, value, handleChange }: Props) => {
  return (
    <Wrapper>
      <StyledInput
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <StyledIcon/>
    </Wrapper>
  );
};

export default Input;

const StyledInput = styled.input`
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
`;

const Wrapper = styled.div`
  position: relative;

  svg {
    width: auto;
  }
`;

const StyledIcon = styled(AiOutlineSearch)`
  position: absolute;
  color: #000;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
