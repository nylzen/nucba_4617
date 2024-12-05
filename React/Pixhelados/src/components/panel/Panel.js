import React from "react";
import { PanelContainerStyled } from "./PanelStyles";

function Panel({ children }) {
  return <PanelContainerStyled>{children}</PanelContainerStyled>;
}

export default Panel;
