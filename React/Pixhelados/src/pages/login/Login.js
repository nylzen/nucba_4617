import React, { useContext, useEffect } from "react";
import Panel from "../../components/panel/Panel";
import FieldSet from "../../components/fieldSet/FieldSet";
import Button from "../../components/button/Button";
import {
  LoginFormStyled,
  LoginSectionStyled,
  LoginTitleStyled,
} from "./LoginStyles";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { handleSubmit, form, isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [navigate, isAuth]);

  return (
    <LoginSectionStyled>
      <LoginTitleStyled>{"Unite a la comunidad pa...."}</LoginTitleStyled>
      <Panel>
        <LoginFormStyled>
          <FieldSet
            type="text"
            placeholder="Escribí tu username..."
            id="username"
            value={form.username}
            name="username"
            label="User"
            maxLength={10}
          />

          <FieldSet
            type="password"
            placeholder="Escribí tu contraseña..."
            id="password"
            name="password"
            value={form.password}
            label="Password"
            error="Este campo es requerido"
          />

          <Button
            primary
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Enviar!
          </Button>
        </LoginFormStyled>
      </Panel>
    </LoginSectionStyled>
  );
}

export default Login;
