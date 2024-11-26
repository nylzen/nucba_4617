import { Button } from "../Button/Button";
import { useReducer } from "react";


const INITIAL_STATE = {
  counter: 0,
};

const counterReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "INCREMENT_10":
      return { counter: state.counter + 10 };
    case "DECREMENT_10":
      return { counter: state.counter - 10 };
    case "RESET":
      return { counter: 0 };
    default:
      return state;
  }
};

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const hola = "hola";
  return (
    <div>
      <h1>Counter Reducer: {state.counter}</h1>
      <Button onClick={() => dispatch({ type: "DECREMENT_10", payload: hola })}>
        -10
      </Button>
      <Button onClick={() => dispatch({ type: "DECREMENT" })}>-1</Button>
      <Button onClick={() => dispatch({ type: "INCREMENT" })}>+1</Button>
      {/* <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button> */}
      <Button onClick={() => dispatch({ type: "INCREMENT_10" })}>+10</Button>
      <Button onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
    </div>
  );
};
