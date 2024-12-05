import React from "react";
import { useLocation } from "react-router-dom";
import { LinkButtonStyled } from "../navbar/NavbarStyles";

export const LinkItem = (props) => {
  const location = useLocation();

  return (
    <LinkButtonStyled
      className={location.pathname.includes(props.to) ? `active` : ""}
      to={props.to}
    >
      {props.children}
    </LinkButtonStyled>
  );
};
