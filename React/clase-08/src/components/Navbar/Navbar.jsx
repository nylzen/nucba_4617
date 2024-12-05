import { useNavigate } from "react-router-dom";
import {
  LinkContainer,
  Logo,
  NavbarContainer,
  NavlinkStyled,
} from "./NavbarStyles";
import { routesLinks } from "../../routes/routesMapper";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { isAuth, user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <Logo onClick={() => navigate("/")}>
        <img
          src="https://image.typedream.com/cdn-cgi/image/width=384,format=auto,fit=scale-down,quality=85/https://api.typedream.com/v0/document/public/ac4f6f0d-8160-4e58-9d18-cb5e7c880fb6_Recurso_32_png.png"
          alt=""
        />
      </Logo>

      <LinkContainer>
        <NavlinkStyled to="/">Home</NavlinkStyled>
        <NavlinkStyled to="/products">Products</NavlinkStyled>
        <NavlinkStyled to={isAuth ? `/user/${user}` : `/login`}>
          {isAuth ? "Perfil" : "Login"}
        </NavlinkStyled>
        {/* {routesLinks.map((link) => (
          <NavlinkStyled key={link.id} to={link.path}>
            {link.label}
          </NavlinkStyled>
        ))} */}
      </LinkContainer>
    </NavbarContainer>
  );
};
