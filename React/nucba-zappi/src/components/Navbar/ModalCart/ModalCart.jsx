import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { IoMdTrash } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { formatPrice } from "../../../utils";

import Increase from "../../UI/Increase/Increase";
import Submit from "../../UI/Submit/Submit";
import ModalCartCard from "./ModalCartCard";

import { ModalOverlayStyled } from "../NavbarStyles";
import {
  ButtonContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  MainContainerStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from "./ModalCartStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  toggleHiddenCart,
} from "../../../redux/slices/cart/cartSlice";

const ModalCart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    shippingCost,
    hidden: hiddenCart,
  } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleToggleHiddenCart = () => {
    dispatch(toggleHiddenCart());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  const totalPriceWithShipping = totalPrice + shippingCost;

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={handleToggleHiddenCart}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: "spring", damping: 27 }}
            key="cart-modal"
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className="close__modal "
                whileTap={{ scale: 0.95 }}
                onClick={handleToggleHiddenCart}
              >
                <MdOutlineClose size="24px" />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Tus Productos</h1>
                <Increase
                  onClick={handleClearCart}
                  bgColor="var(--magenta)"
                  disabled={!cartItems.length}
                >
                  <IoMdTrash />
                </Increase>
              </TitleStyled>

              <ProductsWrapperStyled>
                {cartItems.length ? (
                  cartItems.map((item) => (
                    <ModalCartCard key={item.id} {...item} />
                  ))
                ) : (
                  <p>Compra algo, no seas rata 🐀</p>
                )}
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(totalPrice)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{formatPrice(shippingCost)}</span>
              </EnvioStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>{formatPrice(totalPriceWithShipping)}</PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit onClick={() => {
                  navigate('/checkout')
                  handleToggleHiddenCart()
                }}>
                  Iniciar pedido
                </Submit>
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
