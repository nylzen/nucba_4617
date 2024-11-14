import { categories } from "../../data/categories";
import { CategoriesContainer, CategoriesSection } from "./categories-styles";
import { CategoryCard } from "./category-card";

export const Categories = () => {
  return (
    <CategoriesSection>
      <h2>Categorias</h2>
      <CategoriesContainer>
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </CategoriesContainer>
    </CategoriesSection>
  );
};
