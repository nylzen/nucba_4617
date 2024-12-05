import React from "react";
import { ButtonContainerStyled, PrimaryButtonStyled } from "./ButtonStyles";

function Button(props) {
  return props.primary ? (
    <PrimaryButtonStyled {...props}>{props.children}</PrimaryButtonStyled>
  ) : (
    <ButtonContainerStyled {...props}>{props.children}</ButtonContainerStyled>
  );
}

export default Button;
