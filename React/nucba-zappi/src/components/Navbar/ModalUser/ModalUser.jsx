import { AnimatePresence } from "framer-motion";

import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from "./ModelUserStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenMenu } from "../../../redux/slices/user/userSlice";

const ModalUser = () => {
  // const [hiddenMenu, setHiddenMenu] = useState(true);
  const { hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
          <UsernameStyled>Pepito</UsernameStyled>
          <HrStyled />
          <LinkStyled to="/mis-ordenes">Mis Ordenes</LinkStyled>
          <span onClick={() => dispatch(toggleHiddenMenu())}>
            Cerrar Sesion
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
