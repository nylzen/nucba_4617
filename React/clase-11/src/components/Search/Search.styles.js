import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  border: 1px solid rgba(174, 174, 192, 0.2);
`;

export const InputStyled = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  color: #c1c0c9;
  font-size: 1rem;
  letter-spacing: 0.5px;

  &::placeholder {
    font-size: 1rem;
    letter-spacing: 0.5px;
    color: #555;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonStyled = styled.button`
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
