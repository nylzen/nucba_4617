import { Logo } from "./logo";
import {
  BurgerMenu,
  HeaderContainer,
  HomeIcon,
  LinkItem,
  LinksContainer,
  UserIcon,
} from "./navbar-styles";
import { FaHamburger } from "react-icons/fa";

const navLinks = [
  {
    id: 1,
    path: "",
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    path: "",
    label: "Inicia sesion",
    icon: <UserIcon />,
  },
];

export const Navbar = () => {
  return (
    <HeaderContainer>
      <Logo />
      <nav>
        <LinksContainer>
          {/* <li>
            <LinkItem href="#" active>
              <HomeIcon />
              Home
            </LinkItem>
          </li>
          <li>
            <LinkItem href="#">
              Inicia sesion <UserIcon />
            </LinkItem>
          </li> */}
          {navLinks.map((link) => (
            <LinkItem
              key={link.id}
              href={link.path}
              active={link.label === "Home"}
            >
              {link.icon}
              {link.label}
            </LinkItem>
          ))}
        </LinksContainer>
      </nav>

      <BurgerMenu>
        <FaHamburger />
      </BurgerMenu>
    </HeaderContainer>
  );
};
