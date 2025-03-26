import { CategoriasContainer } from "./CategoriasStyles";
import Categoria from "./Categoria";
import { useSelector } from "react-redux";

const Categorias = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <CategoriasContainer>
      {categories.map((category) => (
        <Categoria key={category.id} {...category} />
      ))}
    </CategoriasContainer>
  );
};

export default Categorias;
