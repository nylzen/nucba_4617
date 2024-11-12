import styled from "styled-components";
import { Button, Flex, MyCard, NewButton, Section } from "./styles";

// Podemos tener los estilos aca
const Title = styled.h2`
  font-size: 2rem;
  text-decoration: underline;
`;

export const Products = () => {
  return (
    <Section>
      <Title>Products</Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, amet!
      </p>
      <Flex
        messi="100px"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Button>Comprar ahora</Button>
        <NewButton>Holi</NewButton>
      </Flex>

      <MyCard hover={true} direction='column' messi='20px'>
        <h2>Titulo</h2>
        <p>hola</p>
      </MyCard>
    </Section>
  );
};
