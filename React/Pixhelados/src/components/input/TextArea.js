import React from "react";
import { TextAreaContainerStyled, TextAreaStyled } from "./TextAreaStyles";

function TextArea(props) {
  return (
    <TextAreaContainerStyled>
      <TextAreaStyled
        id={props.id}
        name={props.name}
        type="text"
        rows={4}
        placeholder={props.placeholder}
      />
    </TextAreaContainerStyled>
  );
}

export default TextArea;
