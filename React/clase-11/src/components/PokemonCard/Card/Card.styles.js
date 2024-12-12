import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 50px 30px;
  padding-bottom: 15px;
  border-radius: 30px;
  border: 1.1px solid rgba(174, 174, 192, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 5px 5px 25px rgba(174, 174, 192, 0.2);
    border-color: #111;
  }
`;

export const CardTextContentContainerStyled = styled.div`
  text-align: center;
  color: #fff;

  & h2 {
    margin: 0;
    font-weight: 700;
    font-size: 35px;
    line-height: 36px;
  }

  & h3 {
    margin: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-top: 3px;
  }
`;

export const CardStatusContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CardTypeContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 0 20px;

  & p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #686868;
  }
`;
