import "./App.css";
import { AppRouter } from "./routes/AppRouter";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <AppRouter />
      <GlobalStyles />
    </>
  );
}

export default App;
