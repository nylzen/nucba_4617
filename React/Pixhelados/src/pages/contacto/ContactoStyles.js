import styled from "styled-components";

export const ContactSectionStyled = styled.section`
  padding: 50px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;

  @media screen and (max-width: 920px) {
    width: 100%;
  }

  @media screen and (max-width: 590px) {
    padding: 10px;
    width: 100%;
  }
`;

export const ContactTitleStyled = styled.h2`
  color: ${(props) => props.theme.focusSecondary};
  font-weight: normal;
  /* font-family: pixel-heading; */
`;

export const ContactFormStyled = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
