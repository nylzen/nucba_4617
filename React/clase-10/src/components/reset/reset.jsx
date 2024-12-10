import { BiReset } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/slices/counter-slice";

export const Reset = () => {
  const dispatch = useDispatch();
  return (
    <BiReset
      size="32px"
      cursor="pointer"
      color="crimson"
      onClick={() => dispatch(reset())}
    />
  );
};
