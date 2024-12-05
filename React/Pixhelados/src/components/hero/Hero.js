import React from "react";
import Panel from "../panel/Panel";
import Title from "../title/Title";
import {
  HeroContainerStyled,
  PanelContentStyled,
  SeeMoreIconStyled,
  SeeMoreStyled,
} from "./HeroStyles";

function Hero() {
  return (
    <HeroContainerStyled>
      <Title>PIXHELADOS!</Title>
      <Panel>
        <PanelContentStyled>
          Los mejores helados de Pueblo Paleta, encontralos en Pix Helados!
        </PanelContentStyled>
      </Panel>

      {/* Ver más */}
      <SeeMoreStyled>
        Ver más <SeeMoreIconStyled />
      </SeeMoreStyled>
    </HeroContainerStyled>
  );
}

export default Hero;
