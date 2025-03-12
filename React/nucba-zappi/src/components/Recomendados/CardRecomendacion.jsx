import { formatPrice } from "../../utils/index";

import Button from "../UI/Button/Button";

import {
  Card,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  InfoCard,
} from "./CardsRecomendacionStyled";

const CardRecomendacion = () => {
  return (
    <Card>
      <CardImg
        src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648456/coding/NucbaZappi/Productos/muzza-mentolada_fmh9at.png"
        alt="La Aco"
      />
      <CardText>
        <CardTitle>La Aco</CardTitle>
        <InfoCard>Cheta la gorra</InfoCard>
        <CardPrice>{formatPrice(3000)}</CardPrice>
      </CardText>
      <Button onClick={(e) => e.preventDefault()}>Agregar</Button>
    </Card>
  );
};

export default CardRecomendacion;
