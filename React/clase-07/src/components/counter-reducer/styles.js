import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CounterContainer = styled(ButtonContainer)`
  gap: 1rem;
  height: 100vh;
`;

export const CounterButton = styled.button`
  padding: 10px;
  font-size: 32px;
  text-align: center;
  min-width: 100px;
  outline: none;

  border: 3px solid white;

  /* background: ${(props) => (props.messi ? "blue" : "red")}; */
  ${(props) =>
    props.left &&
    css`
      border-top-left-radius: 9px;
      border-bottom-left-radius: 9px;
    `}

  ${(props) =>
    props.right &&
    css`
      border-top-right-radius: 9px;
      border-bottom-right-radius: 9px;
    `} /* Para desestructurar una prop */
    /* ${({ messi }) => messi && "background: orange"} */
`;