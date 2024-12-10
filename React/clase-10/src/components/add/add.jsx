import { CiCirclePlus } from "react-icons/ci";
import { CounterButton } from "./styles";
import { RiNumber5 } from "react-icons/ri";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { increment, increment_5, multiply } from "../../redux/slices/counter-slice";

export const Add = () => {
  const dispatch = useDispatch();
  return (
    <>
      <CounterButton onClick={() => dispatch(increment())}>
        <CiCirclePlus size="32px" />
      </CounterButton>
      <CounterButton onClick={() => dispatch(increment_5())}>
        +<RiNumber5 size="32px" />
      </CounterButton>

      <CounterButton last onClick={() => dispatch(multiply())}>
        <FaRegTimesCircle size="32px" />
      </CounterButton>
    </>
  );
};
