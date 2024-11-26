import { useContext } from "react";
import "./App.css";
import { ContentWrapper } from "./components/content-wrapper/ContentWrapper";
// import { CounterReducer } from "./components/CounterReducer/CounterReducer";
import { EjemploContext } from "./components/EjemploContext/EjemploContext";
import { Layout } from "./components/Layout/Layout";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Contexto } from "./context/MiContexto";
import { Nivel1 } from "./components/PropDrilling/Nivel1";

function App() {
  const { color, isLogged, incrementar } = useContext(Contexto);
  return (
    <Layout>
      <ContentWrapper>
        <h1 style={{ color: color }}>HOli</h1>
        {/*
        <Button>Explorar</Button> */}
        {/* <CounterReducer /> */}
        <EjemploContext />
        {isLogged && (
          <div>
            <h1>Bienvenido, Usuario</h1>
            <p>Estas logueado</p>
          </div>
        )}

        <button onClick={incrementar}>INCREMENTAR CONTADOR</button>
        <Nivel1 />
      </ContentWrapper>
      <GlobalStyles />
    </Layout>
  );
}

export default App;
