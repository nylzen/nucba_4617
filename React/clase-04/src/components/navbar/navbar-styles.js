import { FaUserAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--nav-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  height: 90px;
  /* position: fixed; */
  /* width: 100%; */
`;
export const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 992px){
    display: none;
  }
`;

export const LinkItem = styled.a`
  background-color: ${(props) => (props.active ? "var(--orange-bg)" : "")};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 10px;
`;

export const HomeIcon = styled(IoHomeSharp)`
  color: var(--orange);
  font-size: 1.5rem;
`;

export const UserIcon = styled(FaUserAlt)`
  color: var(--orange);
  font-size: 1.5rem;
`;

export const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    color: var(--orange);
    font-size: 2rem;
    cursor: pointer;
  }
`