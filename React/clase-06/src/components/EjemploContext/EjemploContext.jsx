import { useContext } from "react";
import { Contexto } from "../../context/MiContexto";

export const EjemploContext = () => {
  const valores = useContext(Contexto);
  console.log(valores);
  return (
    <div>
      <h2 style={{ color: valores.color }}>{valores.titulo}</h2>
      <p>{valores.count}</p>
    </div>
  );
};
