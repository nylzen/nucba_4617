import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";

export const HeroContainerStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const PanelContentStyled = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-align: center;
  transition: all 0.3s ease;
  max-width: 780px;

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

export const SeeMoreStyled = styled.p`
  position: absolute;
  left: 50%;
  bottom: 5%;
  color: ${(props) => props.theme.materialTextDisabledShadow};
  transform: translate(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const SeeMoreIconStyled = styled(BiChevronDown)`
  margin-top: 5px;
`;
