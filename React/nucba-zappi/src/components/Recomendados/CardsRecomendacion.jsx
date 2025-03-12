import CardRecomendacion from "./CardRecomendacion";

import { CardsContainer } from "./CardsRecomendacionStyled";

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={4}>
      <CardRecomendacion />
      <CardRecomendacion />
      <CardRecomendacion />
      <CardRecomendacion />
    </CardsContainer>
  );
};

export default CardsRecomendacion;
