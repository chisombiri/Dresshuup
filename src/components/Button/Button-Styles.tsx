import styled from "styled-components";

import { SpinnerContainer } from "../Spinner/spinner-styles";

//button base styles
export const BaseButton = styled.button`
  min-width: 160px;
  width: auto;
  height: 50px;
  letter-spacing: 0.4px;
  line-height: 50px;
  padding: 8 24px;
  font-size: 15px;
  background-color: #ffe202;
  color: #000;
  text-transform: uppercase;
  font-family: "Open Sans";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #222;
    color: #ffffff;
    border: 1px solid #222;
    transition: 300ms ease all;
  }

  &:active {
    background-color: #ffffff;
    color: #222;
    border: 1px solid #222;
    transform: scale(0.95);
    transition: 200ms ease all;
  }
`;

//extending base button to other buttons
export const GoogleAuthButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #4285f4;
  background-color: white;
  border: 1px solid #333;

  &:hover {
    color: #0a68ff;
    background-color: #eeeeee;
    transition: 200ms ease all;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #ffffff;
  color: #222;
  border: 1px solid #333;

  &:hover,
  :active {
    background-color: #ffe202;
    color: #222;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
