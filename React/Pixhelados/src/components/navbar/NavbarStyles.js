import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavbarContainerStyled = styled.header`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.material};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 5px 20px;
  border-top: 2px solid ${(props) => props.theme.borderLightest};
  border-left: 2px solid ${(props) => props.theme.borderLightest};
  border-right: 2px solid ${(props) => props.theme.borderDark};
  border-bottom: 2px solid ${(props) => props.theme.borderDark};

  font-family: "Space Mono", monospace;

  position: sticky;
  z-index: 1;
  top: 0;
`;

export const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  & img {
    width: auto;
    height: 100%;
  }
`;

export const NavbarStyled = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const LinkButtonStyled = styled(NavLink)`
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
  text-decoration: none;

  /* ${(props) =>
    props.isActive &&
    css`
      border-style: solid;
      border-width: 2px;
      border-right-color: ${(props) => props.theme.borderLightest};
      border-bottom-color: ${(props) => props.theme.borderLightest};
      border-left-color: ${(props) => props.theme.borderDark};
      border-top-color: ${(props) => props.theme.borderDark};

      color: ${(props) => props.theme.focusSecondary};
    `}; */

  &:hover,
  &:focus {
    border-style: solid;
    border-width: 2px;
    border-left-color: ${(props) => props.theme.borderLightest};
    border-top-color: ${(props) => props.theme.borderLightest};
    border-right-color: ${(props) => props.theme.borderDark};
    border-bottom-color: ${(props) => props.theme.borderDark};
  }

  &.active {
    border-style: solid;
    border-width: 2px;
    border-right-color: ${(props) => props.theme.borderLightest};
    border-bottom-color: ${(props) => props.theme.borderLightest};
    border-left-color: ${(props) => props.theme.borderDark};
    border-top-color: ${(props) => props.theme.borderDark};

    color: ${(props) => props.theme.focusSecondary};
  }
`;
