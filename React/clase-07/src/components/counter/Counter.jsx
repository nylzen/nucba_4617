import { useState } from "react";
import { Modal } from "./Modal";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleUp = () => {
    setCount(count + 1);
  };

  const handleDown = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const handleModalVisible = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={handleDown}>-1</button>
      <h1>{count}</h1>
      <button onClick={handleUp}>+1</button>
      <hr />
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Open" : "Closed"}
      </button>

      {isOpen && <Modal handleModalVisible={handleModalVisible} />}
    </div>
  );
};
