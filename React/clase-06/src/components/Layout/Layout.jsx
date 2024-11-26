import { useContext } from "react";
import styled from "styled-components";
import { Contexto } from "../../context/MiContexto";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  nav ul {
    display: flex;
    list-style: none;
    gap: 10px;
  }
`;

export const Layout = ({ children }) => {
  const { isLogged, count} = useContext(Contexto)
  return (
    <>
      <Header>
        {/* <h1>{isLogged ? 'Bienvenido' : "Logueate"}</h1> */}
        <h1>{count}</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </Header>
      <main>{children}</main>
      <footer>
        <p>© 2024</p>
      </footer>
    </>
  );
};
