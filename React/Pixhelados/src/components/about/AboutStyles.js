import styled from "styled-components";

export const AboutContainerStyled = styled.section`
  min-height: 35vh;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.canvas};
`;

export const AboutTitleStyled = styled.h2`
  color: ${(props) => props.theme.focusSecondary};
  font-family: pixel-heading;
`;

export const AboutTextStyled = styled.p`
  color: ${(props) => props.theme.materialText};
  width: 70%;
  text-align: center;
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;

  @media screen and (max-width: 590px) {
    width: 100%;
  }
`;
