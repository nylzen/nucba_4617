import { productsData } from "../../data/products";
import { ProductCard } from "./ProductCard";
import "./styles.css";

export const Products = () => {
  return (
    <div className="container">
      <h1>Listado de productos</h1>
      <hr />
      <div className="cards-container">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
