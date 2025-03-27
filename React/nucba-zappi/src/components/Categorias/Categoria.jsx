import { useDispatch, useSelector } from "react-redux";
import { BorderDecoration, CardCategoria } from "./CategoriasStyles";
import { selectCategory } from "../../redux/slices/categoriesSlice";

export const Categoria = ({ img, title, category }) => {
  const { selectedCategory } = useSelector((state) => state.categories);

  const isSelected = category === selectedCategory;

  const dispatch = useDispatch()

  return (
    <CardCategoria
      selected={isSelected}
      onClick={() => dispatch(selectCategory(category))}
      whileTap={{ scale: 0.95 }}
    >
      <img src={img} alt={category} />
      <h2>{title}</h2>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;
