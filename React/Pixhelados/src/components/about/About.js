import React from "react";
import {
  AboutContainerStyled,
  AboutTextStyled,
  AboutTitleStyled,
} from "./AboutStyles";

function About() {
  return (
    <AboutContainerStyled>
      <AboutTitleStyled>quienes somos</AboutTitleStyled>
      <AboutTextStyled>
        Somos la mejor heladería de todo Pueblo Paleta, porque tenemos el
        laboratorio del Profesor Oak desde donde salen los mejores inventos de
        sabores para que los pruebes y quedes como Charmander haciendo un asado.
        La verdad que lo que estoy poniendo acá no tiene nada de sentido pero
        tengo que escribir mucho para que rellene un poco esta sección. Vamos a
        buscar las esferas del Dragón! Ah confundía los dibujitos. Aguante Hey
        Arnold.
      </AboutTextStyled>
    </AboutContainerStyled>
  );
}

export default About;
