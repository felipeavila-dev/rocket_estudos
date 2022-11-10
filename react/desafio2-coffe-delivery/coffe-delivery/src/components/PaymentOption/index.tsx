import { Container } from "./styles";

import { CreditCard } from 'phosphor-react';
import { useContext } from "react";
import { Context } from "../../contexts/Context";

interface PaymentOptionProps {
  text: string;
  icon?: any;
  value: string;
  selectedMethod: boolean;
}

export const PaymentOption = ({ text, icon, value, selectedMethod }: PaymentOptionProps) => {
  const { setPaymentMethod } = useContext(Context);

  return (
    <Container onClick={ () => setPaymentMethod(value) } selectedMethod={ selectedMethod }>
      <CreditCard color="#8047F8"/>
      <span>{ text }</span>
    </Container>
  );
}