import { useDispatch } from "react-redux";
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
import { addToCart, toggleHiddenCart } from "../../redux/slices/cart/cartSlice";
import { toast } from "sonner";

const CardRecomendacion = ({ title, img, desc, price, id }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, img, desc, price }));
    dispatch(toggleHiddenCart());
    toast.success("Producto agregado al carrito");
  };
  return (
    <Card>
      <CardImg src={img} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <InfoCard>{desc}</InfoCard>
        <CardPrice>{formatPrice(price)}</CardPrice>
      </CardText>
      <Button onClick={handleAddToCart}>Agregar</Button>
    </Card>
  );
};

export default CardRecomendacion;
