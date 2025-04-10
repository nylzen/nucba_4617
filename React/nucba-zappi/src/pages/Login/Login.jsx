import { Formik } from "formik";
import { Link } from "react-router-dom";

import Submit from "../../components/UI/Submit/Submit";
import AuthInput from "../../components/UI/LoginInput/LoginInput";
import { Form, LoginContainerStyled, LoginEmailStyled } from "./LoginStyles";
import { loginInitialValues } from "./formik/initial-values";
import { loginValidationSchema } from "./formik/validation-schema";
import { loginUser } from "./services/services";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/slices/user/userSlice";
import useRedirect from "../../hooks/useRedirect";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  useRedirect(state?.redirectedFromCheckout ? "/checkout" : "/");

  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          try {
            const user = await loginUser(values.email, values.password);
            console.log(user);
            if (user) {
              dispatch(
                setCurrentUser({
                  ...user.usuario,
                  token: user.token,
                })
              );
              toast.success("Inicio de sesión exitoso");
            }
          } catch (error) {
            toast.error(error.response.data.msg);
          }
        }}
      >
        <Form>
          <AuthInput type="text" placeholder="Email" name="email" />
          <AuthInput type="password" placeholder="Password" name="password" />
          <Link to="/forgot-password"></Link>
          <Link to="/register">
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
          <Submit>Ingresar</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
