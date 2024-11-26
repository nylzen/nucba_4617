import styled from "styled-components";

const MyButton = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const Button = ({ children, onClick }) => {
  return <MyButton onClick={onClick}>{children}</MyButton>;
};
