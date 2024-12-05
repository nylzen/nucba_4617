import styled from "styled-components";

export const ProductSectionStyled = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  @media screen and (min-width: 550px) {
    gap: 15px;
  }
`;
