import styled from "styled-components";

export const ButtonContainerStyled = styled.button`
  border: none;
  background: transparent;
  color: ${(props) => props.theme.materialText};
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 10px;
  font-size: 16px;
  user-select: none;
  cursor: pointer;

  &:hover,
  &:focus {
    border-style: solid;
    border-width: 2px;
    border-left-color: ${(props) => props.theme.borderLightest};
    border-top-color: ${(props) => props.theme.borderLightest};
    border-right-color: ${(props) => props.theme.borderDark};
    border-bottom-color: ${(props) => props.theme.borderDark};
  }

  &:active {
    border-style: solid;
    border-width: 2px;
    border-right-color: ${(props) => props.theme.borderLightest};
    border-bottom-color: ${(props) => props.theme.borderLightest};
    border-left-color: ${(props) => props.theme.borderDark};
    border-top-color: ${(props) => props.theme.borderDark};

    color: ${(props) => props.theme.focusSecondary};
  }
`;

export const PrimaryButtonStyled = styled.button`
  background: ${(props) => props.theme.material};
  color: ${(props) => props.theme.materialText};
  border: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: auto;
  padding: 0 10px;
  font-size: 16px;
  user-select: none;
  cursor: pointer;

  &:active::before {
    border-style: solid;
    border-width: 2px;
    border-left-color: ${(props) => props.theme.borderDarkest};
    border-top-color: ${(props) => props.theme.borderDarkest};
    border-right-color: ${(props) => props.theme.borderLightest};
    border-bottom-color: ${(props) => props.theme.borderLightest};
    box-shadow: inset 1px 1px 0px 1px ${(props) => props.theme.borderDark},
      inset -1px -1px 0 1px ${(props) => props.theme.borderLight};
  }

  &:active::after {
    outline: 2px dotted #f4f4ed;
    outline-offset: -7px;
    top: 2px;
    left: 2px;
  }

  &:focus::after {
    outline: 2px dotted #f4f4ed;
    outline-offset: -7px;
    top: 2px;
    left: 2px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    outline: 2px solid ${(props) => props.theme.borderDarkest};
    border-style: solid;
    border-width: 2px;
    border-left-color: ${(props) => props.theme.borderLightest};
    border-top-color: ${(props) => props.theme.borderLightest};
    border-right-color: ${(props) => props.theme.borderDarkest};
    border-bottom-color: ${(props) => props.theme.borderDarkest};
    box-shadow: inset 1px 1px 0px 1px ${(props) => props.theme.borderLight},
      inset -1px -1px 0 1px ${(props) => props.theme.borderDark};
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;
