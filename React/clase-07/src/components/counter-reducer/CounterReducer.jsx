import { BiMinus, BiPlusCircle } from "react-icons/bi";
import { FaDivide, FaRegTimesCircle } from "react-icons/fa";
import { RiNumber5 } from "react-icons/ri";
import { CounterButton, ButtonContainer, CounterContainer } from "./styles";
import {
  COUNTER_INITIAL_STATE,
  countReducer,
} from "../../reducers/countReducer";
import { useReducer } from "react";
import { TYPES } from "../../action-types/action-types";

export const CounterReducer = () => {
  // PRIMERO LA FUNCION REDUCER, DESPUES EL ESTADO
  const [state, dispatch] = useReducer(countReducer, COUNTER_INITIAL_STATE);

  const handleIncrement = () => dispatch({ type: TYPES.INCREMENT });

  const handleDecrement = () => dispatch({ type: TYPES.DECREMENT });

  const handleMultiply = () => dispatch({ type: TYPES.MULTIPLY });

  const handleDivide = () => dispatch({ type: TYPES.DIVIDE });

  const handleIncrement5 = () => dispatch({ type: TYPES.INCREMENT_5 });

  const handleDecrement5 = () => dispatch({ type: TYPES.DECREMENT_5 });

  return (
    <>
      <CounterContainer>
        <ButtonContainer>
          <CounterButton left onClick={handleDivide}>
            <FaDivide size="32px" />
          </CounterButton>
          <CounterButton onClick={handleDecrement5}>
            -<RiNumber5 size="32px" />
          </CounterButton>
          <CounterButton onClick={handleDecrement}>
            <BiMinus size="32px" />
          </CounterButton>
        </ButtonContainer>
        <h1 style={{ fontSize: "50px", color: "orange" }}>{state.counter}</h1>
        <ButtonContainer>
          <CounterButton onClick={handleIncrement}>
            <BiPlusCircle size="32px" />
          </CounterButton>
          <CounterButton onClick={handleIncrement5}>
            +<RiNumber5 size="32px" />
          </CounterButton>
          <CounterButton right onClick={handleMultiply}>
            <FaRegTimesCircle size="32px" />
          </CounterButton>
        </ButtonContainer>
      </CounterContainer>
    </>
  );
};
