import { useState } from "react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <p>Menu</p>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar' : 'Abrir'}
      </button>

      <nav style={{ display: isOpen ? 'block' : 'none' }}>
        <li>
          <a href="">messi</a>
        </li>
        <li>
          <a href="">messi</a>
        </li>
        <li>
          <a href="">messi</a>
        </li>
        <li>
          <a href="">messi</a>
        </li>
      </nav>

    </>
  );
};
