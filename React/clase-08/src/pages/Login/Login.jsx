import { useContext } from "react";
import { Card } from "../Productos/styles";
import { Button, LoginContainer, LoginForm } from "./styles";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const { handleSubmit, handleChange, isAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(`/`);
    }
  }, [isAuth, navigate]);

  return (
    <>
      {/* <Toaster richColors/> */}
      <LoginContainer>
        <Card>
          <img src="https://www.thesun.ie/wp-content/uploads/sites/3/2022/12/2022-argentinas-lionel-messi-kisses-784174076-3.jpg?strip=all&quality=100&w=1080&h=1080&crop=1" />
          <LoginForm>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="messi@gmail.com"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              onChange={handleChange}
            />
            <Button onClick={handleSubmit}>Iniciar Sesión</Button>
          </LoginForm>
        </Card>
      </LoginContainer>
    </>
  );
};
