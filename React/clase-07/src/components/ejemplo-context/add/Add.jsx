import { BiPlusCircle } from "react-icons/bi";
import { ButtonContainer, CounterButton } from "../../counter-reducer/styles";
import { RiNumber5 } from "react-icons/ri";
import { FaRegTimesCircle } from "react-icons/fa";
import { useCountContext } from "../../../context/CountContext";
import { TYPES } from "../../../action-types/action-types";

export const Add = () => {
  const { dispatch } = useCountContext();
  const handleIncrement = () => dispatch({ type: TYPES.INCREMENT });
  const handleMultiply = () => dispatch({ type: TYPES.MULTIPLY });
  const handleIncrement5 = () => dispatch({ type: TYPES.INCREMENT_5 });

  return (
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
  );
};
