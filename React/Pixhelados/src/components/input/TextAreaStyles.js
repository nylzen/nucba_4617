import styled from "styled-components";

export const TextAreaContainerStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 35px;
  background: ${(props) => props.theme.canvas};

  position: relative;
  padding: 2px;
  font-size: 16px;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${(props) => props.theme.borderDark};
  border-top-color: ${(props) => props.theme.borderDark};
  border-right-color: ${(props) => props.theme.borderLightest};
  border-bottom-color: ${(props) => props.theme.borderLightest};
  line-height: 1.5;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-style: solid;
    border-width: 2px;
    border-left-color: ${(props) => props.theme.borderDarkest};
    border-top-color: ${(props) => props.theme.borderDarkest};
    border-right-color: ${(props) => props.theme.borderLight};
    border-bottom-color: ${(props) => props.theme.borderLight};
    pointer-events: none;
    box-shadow: inset 2px 2px 3px rgb(0 0 0 / 20%);
  }
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  min-height: 27px;
  color: ${(props) => props.theme.materialText};
  padding: 8px;
  font-size: 16px;
  resize: none;
`;
