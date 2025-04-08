import Input from "../../UI/Input/Input";
import Submit from "../../UI/Submit/Submit";

import { CheckoutDatosStyled, Form, Formik } from "./CheckoutFormStyles";
import { checkoutInitialValues } from "./formik/initial-values";
import { checkoutValidationSchema } from "./formik/validation-schema";

// Formik dentro Form dentro Field con su ErrorMessage
// Que necesita formik para poder funcionar?
// 1. initialValues
// 2. validationSchema
// 3. onSubmit

const CheckoutForm = ({ cartItems, totalPrice, shippingCost }) => {


  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={(values) => {
          const dataForCheckout = {
            name: values.name,
            phone: values.phone,
            location: values.location,
            address: values.address,
            items: cartItems,
            shippingCost: shippingCost,
            totalPrice: totalPrice,
          }

          console.log(dataForCheckout)
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
            name="phone"
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
            <Submit disabled={!cartItems.length}>Iniciar Pedido</Submit>
          </div>
        </Form>
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
