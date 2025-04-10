import { ErrorMessage, Field } from "formik";
import {
  ErrorMessageStyled,
  InputContainerStyled,
  LoginInputStyled,
} from "./LoginInputStyles";

const AuthInput = ({ type, placeholder, name }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainerStyled>
          <LoginInputStyled
            type={type}
            placeholder={placeholder}
            name={name}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />
          <ErrorMessage name={name}>
            {(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputContainerStyled>
      )}
    </Field>
  );
};

export default AuthInput;
