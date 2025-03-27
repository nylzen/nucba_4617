import { AiOutlineSearch } from "react-icons/ai";

import Button from "../UI/Button/Button";

import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from "./HeroStyles";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectCategory } from "../../redux/slices/categoriesSlice";
import { toast } from "sonner";

const Hero = ({ scrollToProducts }) => {
  const { categories } = useSelector((state) => state.categories);
  const listOfCategories = categories.map((category) => category.category);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleSubmit = (e, value) => {
    e.preventDefault();

    const searchedCategory = value.trim().toLowerCase().split(" ").join("");

    const selectedCategory = listOfCategories.find(
      (category) => category.toLowerCase() === searchedCategory
    );

    if (selectedCategory) {
      dispatch(selectCategory(selectedCategory));
      scrollToProducts();
    } else {
      // return alert("No se encontró la categoría");
      toast.error("No se encontró la categoría");
    }

    setSearch("")
  };

  return (
    <HeroContainerStyled>
      <div>
        <h1 className="title">¿Qué categoría estás buscando?</h1>
        <HeroFormStyled>
          <HeroSearchBarStyled
            type="text"
            placeholder="Ej. Pizzas a la piedra"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button
            onClick={(e) => handleSubmit(e, search)}
            radius="10"
            disabled={!search}
          >
            Buscar
          </Button>
        </HeroFormStyled>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png"
          alt=""
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
