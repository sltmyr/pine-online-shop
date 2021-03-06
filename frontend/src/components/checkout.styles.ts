import { X } from "@styled-icons/feather";
import styled from "styled-components";
import { Button } from "../styles/global_styles";

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 15;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  overflow-y: scroll;
`;

export const ModalWindow = styled.div`
  background-color: #fefefe;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 70%;
  @media (max-width: ${props => props.theme.largeBreakpoint}px) {
    width: 85%;
  }
  @media (max-width: ${props => props.theme.mediumBreakpoint}px) {
    width: 90%;
  }
`;

export const CloseIcon = styled(X)`
  height: 1em;
  align-self: flex-end;
`;

export const CheckoutSectionHeader = styled.p`
  font-size: 16px;
  margin-bottom: 0.5em;
`;

export const AddressForm = styled.form`
  width: 90%;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 0.5em;
  margin-left: 15px;
`;

export const FormLabel = styled.label`
  font-size: 15px;
  min-width: 80px;
  margin-bottom: 0.5em;
`;

export const FormInput = styled.input`
  width: 90%;
  height: 2em;
  border: 1px solid grey;
  padding: 3px;
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
  margin-left: 15px;
`;

export const RadioInput = styled.input`
  margin-right: 10px;
  margin-bottom: 0.5em;
`;

export const CreditCardWrapper = styled.div`
  margin-left: 15px;
  max-width: 350px;
  margin-bottom: 1em;
`;

export const Summary = styled.div`
  display: flex;
`;

export const SummaryText = styled.div`
  font-size: 15px;
  margin-left: 15px;
`;

export const ConfirmationText = styled(SummaryText)`
  margin-bottom: 2em;
`;

export const SummaryPicture = styled.img`
  width: 80px;
`;

export const OrderNowButton = styled(Button)`
  margin-top: 2em;
  margin-left: auto;
`;
export const PaypalButtonContainer = styled.div`
  margin-top: 2em;
  margin-left: auto;
  width: 10em;
  height: 2em;
  font-size: 13.3333px;
`;

export const ErrorText = styled.p`
  font-size: 12px;
  color: red;
`;

export const StyledSpinner = styled.img`
  width: 20px;
  height: 20px;
`;
