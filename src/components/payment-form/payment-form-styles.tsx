import styled from "styled-components";
import Button from "../Button/Button";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    text-align: center;
    width: 50%;
  }
`;

export const FormContainer = styled.form`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 500px;

  @media screen and (max-width: 800px) {
    width: 50%;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
