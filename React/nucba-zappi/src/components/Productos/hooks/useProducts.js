import { useSelector } from "react-redux";
import { useState } from "react";
import { ACTIONS_SHOW, LIMIT_PRODUCTS } from "../constants/constants";

export const useProducts = () => {
  const { productsMock } = useSelector((state) => state.products);
  const { selectedCategory } = useSelector((state) => state.categories);
  const [limit, setLimit] = useState(LIMIT_PRODUCTS);

  const filteredProducts = selectedCategory
    ? productsMock.filter((product) => product.category === selectedCategory)
    : productsMock;

  const productsToShow = filteredProducts.slice(0, limit);
  const isMaxLimit = limit >= filteredProducts.length;

  const handleShowMore = (action) => {
    if (action === ACTIONS_SHOW.PLUS) {
      setLimit((prev) => prev + LIMIT_PRODUCTS);
    } else if (action === ACTIONS_SHOW.MINUS) {
      setLimit((prev) => prev - LIMIT_PRODUCTS);
    }
  };

  return {
    products: productsToShow,
    selectedCategory,
    limit,
    isMaxLimit,
    handleShowMore,
    LIMIT_PRODUCTS
  };
};
