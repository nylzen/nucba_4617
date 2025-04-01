import { ErrorMessage, Field } from "formik";
import {
  ErrorStyled,
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
} from "./Input.styles";

function Input({ label, type, name, isError }) {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      {/* <InputStyled
        type={type}
        id={label}
        name={name}
        {...field}
        error={isError}
      /> */}
      <Field
        as={InputStyled}
        type={type}
        id={label}
        name={name}
        error={isError}
      />

      {/* {isError && <ErrorStyled>{isError}</ErrorStyled>} */}
      <ErrorMessage name={name} component={ErrorStyled} />
    </InputBoxStyled>
  );
}

export default Input;
