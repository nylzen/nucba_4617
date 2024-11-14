import { products } from "../../data/products";
import { Button } from "../ui/button/button";
import { ProductCard } from "./product-card";
import { ButtonsContainer, ProductsContainer, ProductsSection } from "./products-styles";

export const Products = () => {
  return (
    <ProductsSection>
      <h2>Productos</h2>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductsContainer>
      <ButtonsContainer>
        <Button label={"Ver menos"} />
        <Button label={"Ver más"} />
      </ButtonsContainer>
    </ProductsSection>
  );
};
