import { ButtonContainer, CounterButton } from "../../counter-reducer/styles";
import { FaDivide } from "react-icons/fa";
import { RiNumber5 } from "react-icons/ri";
import { BiMinus } from "react-icons/bi";
import { useCountContext } from "../../../context/CountContext";
import { TYPES } from "../../../action-types/action-types";

export const Substract = () => {
  const { dispatch } = useCountContext();

  const handleDecrement = () => dispatch({ type: TYPES.DECREMENT });
  const handleDivide = () => dispatch({ type: TYPES.DIVIDE });
  const handleDecrement5 = () => dispatch({ type: TYPES.DECREMENT_5 });

  return (
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
  );
};
