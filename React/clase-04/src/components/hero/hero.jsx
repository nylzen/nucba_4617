import { Button } from "../ui/button/button";
import { HeroContainer, HeroImg, HeroTextInfo } from "./hero-styles";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroTextInfo>
        <h1>Si tenes zappi, tenes Nucba.</h1>
        <p>Buscá lo que quieras y Nucba te quedes sin comida</p>
        <Button label={"Ver Mas"} radius="10px" />
      </HeroTextInfo>
      <HeroImg>
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png"
          alt=""
        />
      </HeroImg>
    </HeroContainer>
  );
};
