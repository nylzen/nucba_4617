import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/index";

import Button from "../UI/Button/Button";

import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
} from "./CardsProductosStyles";
import { addToCart, toggleHiddenCart } from "../../redux/slices/cart/cartSlice";
import { toast } from "sonner";

const CardProducto = ({ title, img, desc, price, id }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, img, desc, price }));
    dispatch(toggleHiddenCart());
    toast.success("Producto agregado al carrito");
  };

  return (
    <ProductosCard>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <Button onClick={handleAddToCart}>Agregar</Button>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;
