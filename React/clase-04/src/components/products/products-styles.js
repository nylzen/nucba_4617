import styled from "styled-components";

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const CardProduct = styled.div`
background: var(--gray-bg);
border-radius: 10px;
display: flex;
flex-direction: column;
padding: 10px;
gap: 15px;
`

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--btn-gradient);
  color: transparent;
  background-clip: text;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`