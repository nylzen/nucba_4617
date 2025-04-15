import { AnimatePresence } from "framer-motion";

import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from "./ModelUserStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  toggleHiddenMenu,
} from "../../../redux/slices/user/userSlice";
import { useNavigate } from "react-router-dom";

const ModalUser = () => {
  // const [hiddenMenu, setHiddenMenu] = useState(true);
  const { hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          <span
            onClick={() => {
              dispatch(toggleHiddenMenu());
              dispatch(setCurrentUser(null));
              localStorage.clear();
              navigate("/");
            }}
          >
            Cerrar Sesion
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
