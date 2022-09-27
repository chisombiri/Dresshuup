import styled from "styled-components";
//styling over existing component
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 8px;
    margin-bottom: 24px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 24px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const LinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  font-size: 16px;
  padding: 1px 16px;
  cursor: pointer;
  opacity: 0.8;

  &:hover,
  &:active {
    opacity: 1;
    text-decoration: underline;
  }
`;
