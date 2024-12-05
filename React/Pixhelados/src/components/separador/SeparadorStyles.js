import styled from "styled-components";

export const SeparadorStyled = styled.div`
  height: 100%;
  width: 5px;
  border-top: 2px solid ${(props) => props.theme.borderLightest};
  border-left: 2px solid ${(props) => props.theme.borderLightest};
  border-bottom: 2px solid ${(props) => props.theme.borderDark};
  border-right: 2px solid ${(props) => props.theme.borderDark};
  background: ${(props) => props.theme.material};
`;
