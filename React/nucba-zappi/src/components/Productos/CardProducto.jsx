import { formatPrice } from "../../utils/index";

import Button from "../UI/Button/Button";

import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
} from "./CardsProductosStyles";

const CardProducto = () => {
  return (
    <ProductosCard>
      <img
        src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648456/coding/NucbaZappi/Productos/muzza-mentolada_fmh9at.png"
        alt="La Aco"
      />
      <h2>La Aco</h2>
      <p>Cheta la gorra</p>
      <ContainerPrice>
        <CardPrice>{formatPrice(3000)}</CardPrice>
        <Button onClick={(e) => e.preventDefault()}>Agregar</Button>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;
