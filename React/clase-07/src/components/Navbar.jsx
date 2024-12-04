import styled from "styled-components";
import { LinkItems } from "./LinkItems";

const navLinks = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Services",
    url: "/services",
  },
  {
    id: 4,
    name: "Contact",
    url: "/contact",
  },
];

const Header = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  nav ul {
    display: flex;
    gap: 1rem;
    list-style: none;
  }
`

export const Navbar = () => {
  return (
    <Header>
      <a href="#">Logo</a>

      <nav>
        <ul>
          {navLinks.map((link) => (
            // <LinkItems key={link.id} name={link.name} url={link.url} />
            <LinkItems key={link.id} {...link} />
          ))}
        </ul>
      </nav>
    </Header>
  );
};
