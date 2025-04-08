import { useSelector } from "react-redux";
import CheckoutForm from "../../components/Checkout/Form/CheckoutForm";
import ProductsCheckout from "../../components/Checkout/Products/ProductsCheckout";
import { ContainerCheckoutStyled } from "../Checkout/CheckoutStyles";

const Checkout = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  return (
    <div>
      <ContainerCheckoutStyled>
        <CheckoutForm cartItems={cartItems} totalPrice={totalPrice} shippingCost={shippingCost} />
        <ProductsCheckout
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={totalPrice}
        />
      </ContainerCheckoutStyled>
    </div>
  );
};

export default Checkout;
