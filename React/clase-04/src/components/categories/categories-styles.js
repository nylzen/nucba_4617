import styled from "styled-components";

export const CategoriesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 1200px;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const CategoriesContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(7, 1fr); */
  display: flex;
  flex-wrap: wrap;
  /* max-width: 600px; */
  justify-content: center;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CardCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: var(--gray-bg);
  border-radius: 10px;
  width: 150px;

  & h3 {
    font-size: 1rem;
  }
`;

export const Border = styled.div`
  height: 5px;
  width: 50%;
  background: var(--btn-gradient);
  border-radius: 50px;
`;
