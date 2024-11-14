import styled from "styled-components";
import { mediaqueries } from "../../utils/mq";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${mediaqueries.tablet}) {
    flex-direction: column;
  }
`;

export const HeroTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0 2rem;

  h1 {
    font-size: 3rem;
    /* max-width: 80%; */
  }

  @media (max-width: ${mediaqueries.tablet}) {
    align-items: center;
    order: 2;
  }
`;

export const HeroImg = styled.div`

`;
