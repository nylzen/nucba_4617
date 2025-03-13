import CardProducto from "./CardProducto";
import Button from "../UI/Button/Button";
import { ProductosContainer } from "./CardsProductosStyles";
import { ButtonContainerStyled } from "../../pages/Home/HomeStyles";
import { productsMock } from "../../mock/products";

const CardsProductos = () => {

  return (
    <>
      <ProductosContainer>
        {productsMock.map((product) => {
          // console.log(product)
          return <CardProducto key={product.id} {...product} />
          // return <CardProducto key={product.id} title={product.title} img={product.img} desc={product.desc} price={product.price} />
        })}
      </ProductosContainer>

      <ButtonContainerStyled>
        <Button
          onClick={(e) => e.preventDefault()}
          secondary="true"
          disabled="true"
        >
          <span>Ver menos</span>
        </Button>
        <Button onClick={(e) => e.preventDefault()} disabled="true">
          Ver más
        </Button>
      </ButtonContainerStyled>
    </>
  );
};

export default CardsProductos;
