import { useState } from "react";

export const Contador = () => {
  const [counter, setCounter] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  const handlePlus = () => {
    setCounter(counter + 1);
    // setCounter(1000)
  };

  const handleMinus = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Contador: {counter}</h1>
      <hr />
      <h2>{isTrue ? "Es true" : "Es false"}</h2>
      <button onClick={() => setIsTrue(!isTrue)}>Cambiar booleano</button>
      <br />
      <button onClick={handleMinus}>-1</button>
      <button onClick={handlePlus}>+1</button>
    </>
  );
};
