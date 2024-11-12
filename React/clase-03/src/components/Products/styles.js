import styled, { css } from "styled-components";

export const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 5rem 0;
  transition: all 0.5s;
  /* display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start; */

  p {
    color: gray;
    font-size: 14px;
  }

  /* button {
    background-color: crimson;
    border: none;
    color: white;
    padding: 10px 20px;
  } */

  /* button:hover {
    background: green;
  } */

  /* &:hover { */
  /* background-color: crimson; */
  /* border: 1px solid crimson; */
  /* } */

  /* p::before {
    content: "🍕";
  } */
`;

export const Button = styled.button`
  background-color: crimson;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
`;

export const NewButton = styled(Button)`
  background-color: blue;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  gap: ${(props) => props.messi || "0px"};
`;

// export const FlexRow = styled(Flex)`
// flex-direction: row;
// `

export const MyCard = styled(Flex)`
  ${(props) =>
    props.hover &&
    css`
      &:hover {
        background: red;
        border: 1px solid white;
      }
    `}
`;
