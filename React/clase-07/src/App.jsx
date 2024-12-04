// import { CounterReducer } from "./components/counter-reducer/CounterReducer";
import { CounterContext } from "./components/ejemplo-context/CounterContext";
// import { Counter } from "./components/counter/Counter";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <Counter /> */}
      <hr />
      {/* <CounterReducer /> */}
      <CounterContext />
    </>
  );
}

export default App;
