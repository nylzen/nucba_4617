import { formatPrice } from "../../../utils";

import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

import Count from "../../UI/Count/Count";
import Increase from "../../UI/Increase/Increase";

import {
  CardTitleStyled,
  PriceStyled,
  ProductContainerStyled,
  QuantityContainerStyled,
  TextContainerStyled,
  TextStyled,
} from "./ModalCartStyles";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/slices/cart/cartSlice";
import { IoMdTrash } from "react-icons/io";

const ModalCartCard = ({ id, title, img, desc, price, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addToCart({ id, title, img, desc, price }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id))
  }

  return (
    <ProductContainerStyled>
      <img src={img} alt={title} />
      <TextContainerStyled>
        <CardTitleStyled>{title}</CardTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor="var(--btn-gradient-secondary)"
          onClick={handleRemoveFromCart}
        >
          {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={handleIncrease}>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
