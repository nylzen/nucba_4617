import styled from "styled-components";

export const PanelContainerStyled = styled.div`
  border-style: solid;
  border-width: 2px;
  border-left-color: ${(props) => props.theme.borderLight};
  border-top-color: ${(props) => props.theme.borderLight};
  border-right-color: ${(props) => props.theme.borderDarkest};
  border-bottom-color: ${(props) => props.theme.borderDarkest};
  box-shadow: 4px 4px 10px 0 rgb(0 0 0 / 35%),
    inset 1px 1px 0px 1px ${(props) => props.theme.borderLightest},
    inset -1px -1px 0 1px ${(props) => props.theme.borderDark};
  background: ${(props) => props.theme.material};
  color: ${(props) => props.theme.materialText};
  padding: 7px 10px;
  text-align: center;
`;
