import styled from "styled-components";

export const FieldSetContainerStyled = styled.div`
  position: relative;
  border: 2px solid ${(props) => props.theme.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 16px;
  color: ${(props) => props.theme.materialText};
  box-shadow: -1px -1px 0 1px ${(props) => props.theme.borderDark},
    inset -1px -1px 0 1px ${(props) => props.theme.borderDark};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelContainerStyled = styled.label`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;
  font-size: 1rem;
  background: ${(props) => props.theme.material};
`;

export const ErrorMessageStyled = styled.p`
  color: ${(props) => props.theme.progress};
`;
