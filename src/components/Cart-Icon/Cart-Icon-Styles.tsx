import styled from "styled-components";
//import to style svg component
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingBag)`
  width: 32px;
  height: 32px;
`;

export const CartIconContainer = styled.div`
  width: 56px;
  height: 56px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 4px;
`;
