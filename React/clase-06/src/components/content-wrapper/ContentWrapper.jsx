import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 90vh;
`;
export const ContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
