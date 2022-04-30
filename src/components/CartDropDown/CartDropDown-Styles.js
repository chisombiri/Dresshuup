import styled from "styled-components";
import {BaseButton, GoogleAuthButton, InvertedButton} from "../Button/Button-Styles";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton}, 
    ${GoogleAuthButton}, 
    ${InvertedButton} {
      margin-top: auto;
    }
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 56px auto;
`;

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto; 

    &::-webkit-scrollbar{
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
      
    &::-webkit-scrollbar-thumb {
      background-color: #ffea4e;
      outline: 1px solid #ffe300;
      border-radius: 8px;
    } 
`;
