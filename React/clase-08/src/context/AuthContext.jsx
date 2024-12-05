import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

// Cuando creamos un contexto, vamos a primero:
/*
  Crear el contexto
  Vamos a armar el provider en el cual vamos a tener las variables/obj que querramos proveer a la aplicacion
  Vamos a envolver a toda la app o los componentes que necesiten acceder a esas variables/obj dentro del provider
  Y por ultimo vamos a usar el contexto con el useContext
*/

export const AuthContext = createContext();

const INITIAL_FORM = {
  username: "",
  password: "",
};

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));
  const [form, setForm] = useState(INITIAL_FORM);
  const [user, setUser] = useState(isAuth ? localStorage.getItem("user") : "");

  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username.trim() || !form.password.trim()) {
      // toast.error("Los campos no pueden estar vacíos");
      console.log("Los campos no pueden estar vacíos");
      return;
    }

    setUser(form.username);
    setForm(INITIAL_FORM);
    setIsAuth(true);

    localStorage.setItem("user", form.username);
    navigate(`/user/${form.username}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    setIsAuth(false);
    setUser("");
  };

  const authData = {
    form,
    handleLogout,
    handleChange,
    handleSubmit,
    isAuth,
    user,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
