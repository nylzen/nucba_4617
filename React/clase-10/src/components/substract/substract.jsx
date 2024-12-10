import { FiDivideCircle } from "react-icons/fi";
import { CounterButton } from "./styles";
import { RiNumber5 } from "react-icons/ri";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decrement, decrement_5, divide } from "../../redux/slices/counter-slice";

export const Substract = () => {
  const dispatch = useDispatch();
  return (
    <>
      <CounterButton last onClick={() => dispatch(divide())}>
        <FiDivideCircle size="32px" />
      </CounterButton>
      <CounterButton onClick={() => dispatch(decrement_5())}>
        -<RiNumber5 size="32px" />
      </CounterButton>
      <CounterButton onClick={() => dispatch(decrement())}>
        <AiOutlineMinusCircle size="32px" />
      </CounterButton>
    </>
  );
};
