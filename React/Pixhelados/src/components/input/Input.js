import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { InputContainerStyled, InputStyled } from "./InputStyles";

function Input(props) {
  const { handleChange } = useContext(AuthContext);
  return (
    <InputContainerStyled>
      <InputStyled {...props} onChange={(e) => handleChange(e)} />
    </InputContainerStyled>
  );
}

export default Input;
