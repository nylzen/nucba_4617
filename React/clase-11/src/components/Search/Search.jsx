import { ImSearch } from "react-icons/im";
import { ButtonStyled, InputStyled, SearchFormStyled } from "./Search.styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPokemon } from "../../helpers/pokemon-actions";

function Search() {
  const [pokemon, setPokemon] = useState("");

  const dispatch = useDispatch();

  return (
    <SearchFormStyled
      onSubmit={(e) => {
        // handleSubmit(e, pokemon);
        dispatch(fetchPokemon(e, pokemon));
        setPokemon("");
      }}
    >
      <InputStyled
        placeholder="Search"
        onChange={(e) => setPokemon(e.target.value)}
        value={pokemon}
      />
      <ButtonStyled type="submit" disabled={!pokemon}>
        <ImSearch color="#555" />
      </ButtonStyled>
    </SearchFormStyled>
  );
}

export default Search;
