import { useState } from "react";
import { useRef } from "react";

export const EjemploRef = () => {
  const inputRef = useRef();
  const sectionRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef);
    inputRef.current.style.background = "red";
    inputRef.current.select();
  };

  const scrollToSection = () => {
    // sectionRef.current.scrollintoView({ behavior: "smooth" });
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Focus Input</h1>
      {counter}
      <p onClick={() => setCounter(counter + 1)}>Click</p>
      <hr />

      <input ref={inputRef} type="text" placeholder="Nombre" />
      <button onClick={handleClick}>Focusear</button>

      <hr />
      <br />
      <button onClick={scrollToSection}> Ir a una seccion</button>
      <section
        style={{
          height: "100vh",
          background: "lightblue",
        }}
      ></section>
      <section
        style={{
          height: "100vh",
          background: "lightcoral",
        }}
        ref={sectionRef}
      >
        <h2>Esta es la seccion</h2>
      </section>
    </>
  );
};
