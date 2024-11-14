import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 10px 20px;
  background: var(--btn-gradient);
  border: none;
  border-radius: ${(props) => props.radius};
  color: var(--text-white);
`;

export const Button = ({ label, radius = "30px" }) => {
  return <ButtonStyled radius={radius}>{label}</ButtonStyled>;
};
