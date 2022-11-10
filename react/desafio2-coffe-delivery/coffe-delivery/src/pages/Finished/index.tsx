import { useContext } from "react";
import { DescriptionBox } from "../../components/DescriptionBox";
import { Container, ContentArea, HeaderTitle, ImageArea, OrderStatus } from "./styles";

import finishedImage from '../../assets/images/finished_image.svg';

import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import { Context } from "../../contexts/Context";

export const Finished = () => {

  const { userAddress, paymentMethod } = useContext(Context);

  return (
    <Container>
      <HeaderTitle>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só esperar que logo o café chegará até você</p>
      </HeaderTitle>

      <ContentArea>
        <OrderStatus>
          <DescriptionBox
            bgColor='#8047F8'
            text={ userAddress.logradouro }
            secondText={`${userAddress.bairro} - ${userAddress.localidade}, ${userAddress.uf}`}
          >
            <MapPin weight="fill" />
          </DescriptionBox>

          <DescriptionBox
            bgColor='#DBAC2C'
            text='Previsão de entrega'
            secondText='20 min - 30 min'
          >
            <Timer weight="fill" />
          </DescriptionBox>

          <DescriptionBox
            bgColor='#C47F17'
            text='Forma de pagamento'
            secondText={ paymentMethod }
          >
            <CurrencyDollar weight="fill" />
          </DescriptionBox>
        </OrderStatus>

        <ImageArea>
          <img src={ finishedImage } alt="" />
        </ImageArea>
      </ContentArea>

    </Container>
  );
}