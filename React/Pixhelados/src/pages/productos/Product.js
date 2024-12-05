import React from "react";
import { ProductCard } from "../../components/productCard/ProductCard";
import { ProductSectionStyled } from "./ProductStyles";
import { features } from "../../data/productsData";

function Productos() {
  return (
    <>
      <ProductSectionStyled>
        {features?.map((feature) => (
          <ProductCard key={feature.id} {...feature} />
        ))}
      </ProductSectionStyled>
    </>
  );
}

export default Productos;
