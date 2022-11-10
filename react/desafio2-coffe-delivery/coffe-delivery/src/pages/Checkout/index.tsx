import { CheckoutHeader, Container, FormArea, FormLine, HeaderTitle, OrderArea, OrderForm, OrderIcon, OrderTitle, PaymentArea, PaymentOptions } from "./styles";

import { MapPinLine, CurrencyDollar } from 'phosphor-react';
import { InputField } from "../../components/Input/styles";
import { PaymentOption } from "../../components/PaymentOption";
import { CartArea } from "../../components/CartArea";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/Context";
import { findCep } from "../../helpers/findCep";

interface Address {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  numero: string;
  complemento: string;
  uf: string;
}

export const Checkout = () => {

  const { paymentMethod, userAddress, setUserAddress } = useContext(Context);

  const handleChangeCep = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value !== '' && e.target.value.length === 8) {
      const awaitTime = setTimeout(async () => {

        const apiResult = await findCep(Number(e.target.value));

        if(apiResult) {
          setUserAddress({
            cep: e.target.value,
            logradouro: apiResult.logradouro,
            bairro: apiResult.bairro,
            localidade: apiResult.localidade,
            numero: '',
            complemento: '',
            uf: apiResult.uf
          });
        } else {
          alert('Não foi possivel localizar o cep inserido');
        }
  
      }, 2000);

      () => clearTimeout(awaitTime);
    }
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'Complemento') {
      setUserAddress({ ...userAddress, complemento: e.target.value });
    } else {
      setUserAddress({ ...userAddress, numero: e.target.value });
    }
  }

  return (
    <Container>
      <OrderArea>
        <HeaderTitle> Complete seu pedido </HeaderTitle>
        <OrderForm>
          <CheckoutHeader>
            <OrderIcon>
              <MapPinLine weight="fill" color='#C47F17' size='1.5rem' />
            </OrderIcon>
            <OrderTitle>
              <p> Endereço de entrega</p>
              <small>Informe o endereço onde deseja receber seu pedido</small>
            </OrderTitle>
          </CheckoutHeader>

          <FormArea>
            <FormLine>
              <InputField placeholder="CEP" type='number' onChange={ (e) => handleChangeCep(e) }/>
            </FormLine>

            <FormLine>
              <InputField placeholder="Rua" type='text' value={ userAddress.logradouro } readOnly/>
            </FormLine>

            <FormLine>
              <InputField
                name='Numero'
                width='2fr'
                placeholder="Número"
                type='number'
                value={ userAddress.numero }
                onChange={ (e) => handleChangeInput(e) }
              />
              <InputField
                name='Complemento'
                placeholder="Complemento"
                type='text'
                value={ userAddress.complemento }
                onChange={ (e) => handleChangeInput(e) }  
              />
            </FormLine>

            <FormLine className='spaced-inputs'>
              <InputField width='1fr'
                placeholder="Bairro"
                type='text'
                value={ userAddress.bairro }
                readOnly
              />
              <InputField width='1fr' placeholder="Cidade" type='text' value={ userAddress.localidade } readOnly />
              <InputField placeholder="UF" type='text' value={ userAddress.uf  } readOnly/>
            </FormLine>
          </FormArea>
        </OrderForm>

        <PaymentArea>
            <CheckoutHeader>
              <OrderIcon>
                <CurrencyDollar weight="fill" color='#8047F8' size='1.5rem' />
              </OrderIcon>
              <OrderTitle>
                <p> Pagamento </p>
                <small>O pagamento é feito na entrega. Escolha a forma que deseja pagar</small>
              </OrderTitle>
          </CheckoutHeader>

          <PaymentOptions>
            <PaymentOption
              text='Cartão de crédito'
              value='Crédito'
              selectedMethod={ paymentMethod === 'Crédito' ? true : false }
            />
            <PaymentOption
              text='Cartão de débito'
              value='Débito'
              selectedMethod={ paymentMethod === 'Débito' ? true : false }
            />
            <PaymentOption
              text='Dinheiro'
              value='Dinheiro'
              selectedMethod={ paymentMethod === 'Dinheiro' ? true : false }
            />
          </PaymentOptions>
        </PaymentArea>

      </OrderArea>

      <CartArea />
    </Container>
  );
}