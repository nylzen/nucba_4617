import { Border, CardCategory } from "./categories-styles";

export const CategoryCard = ({ img, title, category }) => {
  return (
    <CardCategory>
      <img src={img} alt={category} />
      <h3>{title}</h3>
      <Border />
    </CardCategory>
  );
};
