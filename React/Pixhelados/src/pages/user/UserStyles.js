import styled from "styled-components";
import { BiLogOut } from "react-icons/bi";

export const UserContainerStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const ContainerButtonStyled = styled.div`
  margin-top: 15px;
`;

export const LogoutIcon = styled(BiLogOut)`
  margin-left: 10px;
`;
