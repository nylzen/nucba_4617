import { ButtonSubmitStyled } from "./Submit.styles";

function Submit({ children }) {
  return <ButtonSubmitStyled type="submit">{children}</ButtonSubmitStyled>;
}

export default Submit;
