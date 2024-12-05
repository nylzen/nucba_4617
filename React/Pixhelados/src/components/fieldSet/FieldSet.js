import React from "react";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import {
  ErrorMessageStyled,
  FieldSetContainerStyled,
  LabelContainerStyled,
} from "./FieldSetStyles";

function FieldSet(props) {
  return (
    <FieldSetContainerStyled>
      <LabelContainerStyled htmlFor={props.id}>
        {props.label}
      </LabelContainerStyled>

      {props.type === "textarea" ? (
        <TextArea
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
        />
      ) : (
        <Input {...props} />
      )}

      {props.error && <ErrorMessageStyled>{props.error}</ErrorMessageStyled>}
    </FieldSetContainerStyled>
  );
}

export default FieldSet;
