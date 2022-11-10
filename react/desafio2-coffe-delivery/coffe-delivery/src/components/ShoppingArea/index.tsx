import { useState } from "react";

import CoffeIcon from '../../assets/images/coffe_icon.svg';
import { ShoppingCart } from 'phosphor-react';
import { coffeesDatabase } from '../../database/coffeeItems';
import { CoffeItem } from "../CoffeeItem";
import { CoffeesArea, Container, TitleArea } from "./styles";

export const ShoppingArea = () => {
  return (
    <Container>
      <TitleArea>
        <h2>Nossos cafés</h2>
      </TitleArea>
      <CoffeesArea>
        { coffeesDatabase.map((coffee) => (
          <CoffeItem key={ coffee.id } coffee={ coffee }/>
        ))}
        
      </CoffeesArea>
     
    </Container>
  );
}