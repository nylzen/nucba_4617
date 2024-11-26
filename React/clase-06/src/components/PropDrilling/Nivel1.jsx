import { Nivel2 } from "./Nivel2";

export const Nivel1 = () => {
  const title = "HOLA DESDE NIVEL 1";
  return (
    <div>
      Nivel 1
      <Nivel2 title={title} />
    </div>
  );
};
