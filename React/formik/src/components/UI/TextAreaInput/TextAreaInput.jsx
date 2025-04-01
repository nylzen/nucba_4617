import { ErrorMessage, Field } from "formik";
import { InputBoxStyled, InputLabelStyled } from "../Input/Input.styles";
import { ErrorStyled, TextArea } from "./TextAreaInput.styles";

function TextAreaInput({ label, name, isError }) {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      {/* <TextArea id={label} /> */}
      <Field as={TextArea} id={label} name={label} isError={isError} />

      {/* {false && <ErrorStyled>Error</ErrorStyled>} */}
      <ErrorMessage name={name} component={ErrorStyled} />
    </InputBoxStyled>
  );
}
export default TextAreaInput;
