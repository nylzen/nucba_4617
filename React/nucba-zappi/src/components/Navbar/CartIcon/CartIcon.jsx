import { FaShoppingCart } from "react-icons/fa";

import { LinkContainerStyled } from "./../NavbarStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCart } from "../../../redux/slices/cart/cartSlice";

const CartIcon = () => {
  const totalCartItems = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );
  const dispatch = useDispatch();

  const handleToggleHiddenCart = () => dispatch(toggleHiddenCart());

  return (
    <LinkContainerStyled onClick={handleToggleHiddenCart}>
      <FaShoppingCart />
      <span>{totalCartItems}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;
