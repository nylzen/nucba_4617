import { InputBoxStyled, InputLabelStyled } from '../Input/Input.styles';
import { ErrorStyled, TextArea } from './TextAreaInput.styles';

function TextAreaInput({ label }) {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <TextArea id={label} />

      {false && <ErrorStyled>Error</ErrorStyled>}
    </InputBoxStyled>
  );
}
export default TextAreaInput;
