import styled from "styled-components";

const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  z-index: 1000;
  color: #000;
`;
export const Modal = ({ handleModalVisible }) => {
  return (
    <ModalStyled>
      <h1>Modal</h1>
      <p>Contenido del modal</p>
      <button onClick={handleModalVisible}>Cerrar</button>
    </ModalStyled>
  );
};
