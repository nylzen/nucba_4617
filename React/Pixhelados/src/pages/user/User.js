import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Panel from "../../components/panel/Panel";
import Title from "../../components/title/Title";
import AuthContext from "../../context/AuthContext";
import {
  ContainerButtonStyled,
  LogoutIcon,
  UserContainerStyled,
} from "./UserStyles";

const User = () => {
  const { username } = useParams();
  const { handleLogout } = useContext(AuthContext);

  return (
    <UserContainerStyled>
      <Title>{`Bienvenido ${username}`}</Title>
      <Panel>
        {" "}
        {username} te felicito. Ya estas en una página privada gracias a React
        Router y Nucba{" "}
      </Panel>
      <ContainerButtonStyled>
        <Button primary onClick={() => handleLogout()}>
          {" "}
          Cerrar sesión <LogoutIcon />{" "}
        </Button>
      </ContainerButtonStyled>
    </UserContainerStyled>
  );
};

export default User;
