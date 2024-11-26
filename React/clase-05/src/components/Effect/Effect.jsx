import { useState } from "react";
import { useEffect } from "react";

export const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  // useEffect(() => {
  //   console.log("Fase de montaje");
  // }, []);

  useEffect(() => {
    console.log("El valor del value cambio");
  }, [value, counter]);

  // useEffect(() => {
  //   console.log("El estado cambio o el componente se re-renderizo");
  // }, [counter, value]);

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h1>Pokemons</h1>
      <input
        type="text"
        placeholder="Escribi algo"
        value={value}
        onChange={handleValue}
      />
    </div>
  );
};
