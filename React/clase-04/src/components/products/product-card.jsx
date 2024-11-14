import { Button } from "../ui/button/button";
import { CardProduct, ContainerPrice, Price } from "./products-styles";

export const ProductCard = (props) => {
  const { img, title, price, desc } = props;
  return (
    <CardProduct>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <ContainerPrice>
        <Price>${price}</Price>
        <Button label={"Agregar"} />
      </ContainerPrice>
    </CardProduct>
  );
};
