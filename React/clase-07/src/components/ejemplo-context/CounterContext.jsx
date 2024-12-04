import { CounterContainer } from "../counter-reducer/styles";
import { Substract } from "./substract/Substract";
import { Add } from "./add/Add";
import { useCountContext } from "../../context/CountContext";

export const CounterContext = () => {
  const { state } = useCountContext();

  return (
    <>
      <CounterContainer>
        <Substract />
        <h1 style={{ fontSize: "50px", color: "orange" }}>{state.counter}</h1>
        <Add />
      </CounterContainer>
    </>
  );
};
