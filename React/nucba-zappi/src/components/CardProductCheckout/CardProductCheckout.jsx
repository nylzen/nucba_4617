import { formatPrice } from '../../utils';
import { IoMdTrash } from 'react-icons/io';
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import Count from '../UI/Count/Count';
import Increase from '../UI/Increase/Increase';

import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  TextStyled,
  QuantityContainerStyled,
} from './CardProductCheckoutStyles';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/slices/cart/cartSlice';

const CardProductCheckout = ({ id, title, img, desc, price, quantity }) => {
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(addToCart({ id, title, img, desc, price }))
  }

  const handleDecrease = () => {
    dispatch(removeFromCart(id))
  }

  return (
    <CardContainerStyled>
      <img src={img} alt={title} />
      <CardInfoStyled>
        <ProductTitleStyled>{title}</ProductTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </CardInfoStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor='var(--btn-gradient-secondary)'
          onClick={handleDecrease}
        >
          {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={handleIncrease}>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductCheckout;
