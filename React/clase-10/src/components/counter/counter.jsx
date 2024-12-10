import { useSelector } from "react-redux";
import { Add } from "../add/add";
import { Reset } from "../reset/reset";
import { Substract } from "../substract/substract";
import {
  CounterButtonContainer,
  CounterContainer,
  CounterSpan,
} from "./styles";

export const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const todos = useSelector(state => state.todos)

  return (
    <>
    <h1>Todos: {todos.length}</h1>
      <CounterContainer>
        <CounterButtonContainer>
          <Substract />
        </CounterButtonContainer>
        <CounterSpan>{count}</CounterSpan>
        <CounterButtonContainer>
          <Add />
        </CounterButtonContainer>
        <Reset />
      </CounterContainer>
    </>
  );
};
