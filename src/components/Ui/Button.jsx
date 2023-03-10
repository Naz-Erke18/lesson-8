import React from "react";
import styled from "styled-components";

const Button = ({ children, bgColor, disabled, onClick }) => {
  return (
    <StyledButton bgColor={bgColor} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 7px 30px;
  background-color: ${(props) => (props.bgColor ? "#50015f" : "#dd0eb0")};
  :disabled {
    background-color: gray;
  }
  border: none;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => (props.bgColor ? "" : "#dd0eb0")};
  }
`;
 
   