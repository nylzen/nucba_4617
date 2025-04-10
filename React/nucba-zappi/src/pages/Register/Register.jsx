import { Formik } from "formik";

import AuthInput from "../../components/UI/LoginInput/LoginInput";
import Submit from "../../components/UI/Submit/Submit";

import { Form, LoginContainerStyled, LoginEmailStyled } from "./RegisterStyles";
import { registerInitialValues } from "./formik/initial-values";
import { registerValidationSchema } from "./formik/validation-schema";
import { createUser } from "./services/services";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const Register = () => {
  // Formik necesita: initialValues, validationSchema, onSubmit
  const navigate = useNavigate();
  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values) => {
          try {
            await createUser(values.nombre, values.email, values.password);
            toast.success("Usuario creado correctamente");
            toast.info("Serás redirigido a la página de login");
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          } catch (error) {
            toast.error(error.response.data.errors[0].msg);
          }
        }}
      >
        <Form>
          <AuthInput type="text" placeholder="Nombre" name="nombre" />
          <AuthInput type="text" placeholder="Email" name="email" />
          <AuthInput type="password" placeholder="Password" name="password" />

          <LoginEmailStyled to="/login">
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit>Registrarte</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
