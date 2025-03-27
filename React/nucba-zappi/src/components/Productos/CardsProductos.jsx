import CardProducto from "./CardProducto";
import Button from "../UI/Button/Button";
import { ProductosContainer } from "./CardsProductosStyles";
import { ButtonContainerStyled } from "../../pages/Home/HomeStyles";
import { useProducts } from "./hooks/useProducts";
import { ACTIONS_SHOW } from "./constants/constants";

const CardsProductos = () => {
  const {
    products,
    selectedCategory,
    isMaxLimit,
    handleShowMore,
    LIMIT_PRODUCTS,
    limit,
  } = useProducts();

  return (
    <>
      <ProductosContainer>
        {products.map((product) => (
          <CardProducto key={product.id} {...product} />
        ))}
      </ProductosContainer>

      {!selectedCategory && (
        <ButtonContainerStyled>
          <Button
            onClick={() => handleShowMore(ACTIONS_SHOW.MINUS)}
            secondary="true"
            disabled={limit === LIMIT_PRODUCTS}
          >
            <span>Ver menos</span>
          </Button>
          <Button
            onClick={() => handleShowMore(ACTIONS_SHOW.PLUS)}
            disabled={isMaxLimit}
          >
            Ver más
          </Button>
        </ButtonContainerStyled>
      )}
    </>
  );
};

export default CardsProductos;
