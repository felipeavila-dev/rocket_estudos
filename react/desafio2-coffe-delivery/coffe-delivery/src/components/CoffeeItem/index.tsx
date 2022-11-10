import { CartIconArea, CoffeeInfoArea, CoffeeItem, Container, PriceArea, QuantityArea } from "./styles";

import CoffeIcon from '../../assets/images/coffe_icon.svg';

import { ShoppingCart } from "phosphor-react";

import { useContext, useState } from "react";
import { Context } from "../../contexts/Context";

interface Coffee {
  id: number;
  title: string;
  tag: string;
  description: string;
  price: number;
}

export const CoffeItem = ({ coffee }: any) => {
  const [qtdItem, setQtdItem] = useState(1);

  const { cart, setCart } = useContext(Context);

  const handleAddToCart = (coffeeItem: Coffee) => {
    const coffeeObj = {
      ...coffeeItem,
      quantity: qtdItem
    };

    setCart([...cart, coffeeObj]);
  }

  return (
        <Container>
        <CoffeeItem>
              <CoffeeInfoArea>
                <img src={ CoffeIcon } alt="" />
                <span>{ coffee.tag }</span>
                <h3>{ coffee.title }</h3>
                <small>{ coffee.description }</small>
              </CoffeeInfoArea>

              <PriceArea>
                <span>
                  <small>R$</small> 
                  { coffee.price }
                </span>
                <QuantityArea>
                  <button onClick={ () => setQtdItem(qtdItem + 1) }>+</button>
                  <span>{qtdItem}</span>
                  <button onClick={ qtdItem > 0 ? () => setQtdItem(qtdItem - 1) : () => {} }>-</button>
                </QuantityArea>

                <CartIconArea onClick={ () => handleAddToCart(coffee) }>
                  <ShoppingCart size='1.4rem' weight="fill" color='#FFF'/>
                </CartIconArea>
              </PriceArea>
            </CoffeeItem>
      </Container>
  );
}