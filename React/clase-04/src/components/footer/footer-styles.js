import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 5rem 0;
`

export const LinksFooter = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`