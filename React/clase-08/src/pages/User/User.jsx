import { useParams } from "react-router-dom";
import { Button } from "../Login/styles";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const User = () => {
  const { username } = useParams();
  const { handleLogout } = useContext(AuthContext);

  return (
    <div>
      <h2>Bienvenido: {username}</h2>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
