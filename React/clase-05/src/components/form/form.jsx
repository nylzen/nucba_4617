import { useState } from "react";

export const Form = () => {
  const [value, setValue] = useState("Messi");
  return (
    <>
      <h1>Form</h1>
      <p>{value}</p>
      <input
        type="text"
        placeholder="Nombre"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
