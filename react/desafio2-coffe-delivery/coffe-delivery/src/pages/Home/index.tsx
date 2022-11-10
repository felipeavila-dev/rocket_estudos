import { BannerArea, Container, ItemsArea, LeftSide, RightSide, TextArea } from "./styles";

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';


import CoffeHeader from '../../assets/images/coffe_header.svg';
import { DescriptionBox } from "../../components/DescriptionBox";
import { ShoppingArea } from "../../components/ShoppingArea";

export const Home = () => {
  return (
    <Container>
      <BannerArea>
        <LeftSide>
          <TextArea>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </TextArea>

          <ItemsArea>
            <DescriptionBox bgColor='#C47F17' text='Compra simples e segura'>
              <ShoppingCart weight="fill"/> 
            </DescriptionBox>
            <DescriptionBox bgColor='#574F4D' text='Embalagem mantém o café intacto'>
              <Package weight="fill"/> 
            </DescriptionBox>
            <DescriptionBox bgColor='#DBAC2C' text='Entrega rápida e rastreada'>
              <Timer weight="fill"/> 
            </DescriptionBox>
            <DescriptionBox bgColor='#8047F8' text='O café chega fresquinho até você'>
              <Coffee weight="fill"/> 
            </DescriptionBox>            
          </ItemsArea>
        </LeftSide>

        <RightSide>
          <img src={ CoffeHeader } alt="" />
        </RightSide>
      </BannerArea>

      <ShoppingArea />
    </Container>
  );
}