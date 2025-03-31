import {
  ErrorStyled,
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
} from './Input.styles';

function Input({ label, type }) {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <InputStyled type={type} id={label} />

      {false && <ErrorStyled>Este campo es obligatorio</ErrorStyled>}
    </InputBoxStyled>
  );
}

export default Input;
