import styled from "styled-components";

export const TitleStyled = styled.h1`
  font-family: pixel;
  color: ${(props) => props.theme.hoverBackground};
  font-size: clamp(30px, 9vw, 70px);
  text-align: center;
`;
