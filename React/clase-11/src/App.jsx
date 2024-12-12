import { MyAppStyled } from "./App.styles";
import Pokemon from "./components/PokemonCard/Card/Card";
import Search from "./components/Search/Search";
import GlobalStyles from "./styles/GlobalStyles";
import Loader from "./components/Loader/Loader";
// import { useAxios } from "./hooks/useAxios";
import { useSelector } from "react-redux";

function App() {
  // const { data, isLoading, error, handleSubmit } = useAxios();

  const { data, isLoading, error } = useSelector((state) => state.pokemon);


  return (
    <>
      <MyAppStyled>
        {/* <Search handleSubmit={handleSubmit} /> */}
        {/* En el search de abjao no le pasamos handleSubmit porque el dispatch de toolkit se va a encargar de setear el estado */}
        <Search />
        {isLoading && <Loader />}
        {error && <h2 style={{ color: "crimson" }}>Hubo un error pa</h2>}
        {data && <Pokemon {...data} />}
      </MyAppStyled>
      <GlobalStyles />
    </>
  );
}

export default App;
