import { toast } from "sonner";
import { useOrders } from "../../../pages/Checkout/hooks/useOrders";
import Input from "../../UI/Input/Input";
import Submit from "../../UI/Submit/Submit";
import Loader from "../../UI/Loader/Loader";

import { CheckoutDatosStyled, Form, Formik } from "./CheckoutFormStyles";
import { checkoutInitialValues } from "./formik/initial-values";
import { checkoutValidationSchema } from "./formik/validation-schema";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../redux/slices/cart/cartSlice";

// Formik dentro Form dentro Field con su ErrorMessage
// Que necesita formik para poder funcionar?
// 1. initialValues
// 2. validationSchema
// 3. onSubmit

const CheckoutForm = ({ cartItems, totalPrice, shippingCost }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createOrder, isLoading } = useOrders();

  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async (values) => {
          const orderData = {
            items: cartItems,
            price: totalPrice,
            shippingCost: shippingCost,
            total: totalPrice + shippingCost,
            shippingDetails: { ...values },
          };
          try {
            await createOrder(orderData);
            toast.success("Orden creada correctamente");
            dispatch(clearCart());
            navigate("/felicitaciones");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Form>
          <Input
            htmlFor="nombre"
            type="text"
            id="nombre"
            name="name"
            placeholder="Tu nombre"
          >
            Nombre
          </Input>
          <Input
            htmlFor="celular"
            type="text"
            id="celular"
            name="cellphone"
            placeholder="Tu celular"
          >
            Celular
          </Input>
          <Input
            htmlFor="localidad"
            type="text"
            id="localidad"
            name="location"
            placeholder="Tu localidad"
          >
            Localidad
          </Input>
          <Input
            htmlFor="direccion"
            type="text"
            id="direccion"
            name="address"
            placeholder="Tu dirección"
          >
            Dirección
          </Input>
          <div>
            <Submit disabled={!cartItems.length || isLoading}>
              {isLoading ? <Loader /> : "Iniciar Pedido"}
            </Submit>
          </div>
        </Form>
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
