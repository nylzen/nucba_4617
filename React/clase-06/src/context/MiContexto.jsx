import { useState } from "react";
import { createContext } from "react";

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const data = {
    color: "rebeccapurple",
    titulo: "Hola soy un titulo",
    count,
    incrementar,
  };

  return <Contexto.Provider value={data}>{children}</Contexto.Provider>;
};
