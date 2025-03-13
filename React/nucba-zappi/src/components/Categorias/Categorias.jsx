import { CategoriasContainer } from "./CategoriasStyles";
import { categoriesMock } from "../../mock/categories";
import Categoria from "./Categoria";

const Categorias = () => {
  return (
    <CategoriasContainer>
      {categoriesMock.map((category) => (
        <Categoria key={category.id} {...category} />
      ))}
    </CategoriasContainer>
  );
};

export default Categorias;
