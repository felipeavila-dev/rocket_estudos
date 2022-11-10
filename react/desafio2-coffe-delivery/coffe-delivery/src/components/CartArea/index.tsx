import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/Context";
import { CartItem, CartItemDescription, CartItemsArea, CartPriceArea, CoffeItemHeader, CoffeItemInfo, Container, FinishOrderButton, HeaderTitle, ItemQuantityArea, ItemRemoveButton, OrderInfo } from "./styles";

import { Minus, Plus, Trash } from 'phosphor-react';

import CoffeImg from '../../assets/images/coffe_icon.svg';
import { useNavigate } from "react-router-dom";

interface Coffee {
  id: number;
  title: string;
  tag: string;
  description: string;
  price: number;
}

export const CartArea = () => {
  const [deliveryPrice, setDeliveryPrice] = useState(5.00);
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);
  const [disableButton, setDisableButton] = useState(true);

  const { cart, setCart, paymentMethod, userAddress } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    let orderPrice: number = 0;

    cart.forEach((coffee) => {
      orderPrice += coffee.quantity * coffee.price;
    });

    setTotalItemsPrice(orderPrice);
  }, [cart]);

  useEffect(() => {
    const values = Object.values(userAddress);
    const noFilledInputs = values.some((value) => value === '');
    
    if (noFilledInputs) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [userAddress])

  const handleDecreaseQuantity = (coffee: Coffee) => {
    const currentCart = cart.map((coffeeItem) => {
      if(coffeeItem.id === coffee.id) {
        coffeeItem.quantity > 1 ? coffeeItem.quantity -= 1 : coffeeItem.quantity;
        return coffeeItem;
      };

      return coffeeItem;
    });
    setCart(currentCart);
  }

  const handleIncreaseQuantity = (coffee: Coffee) => {
    const currentCart = cart.map((coffeeItem) => {
      if(coffeeItem.id === coffee.id) {
        coffeeItem.quantity += 1;
        return coffeeItem;
      };

      return coffeeItem;
    });

    setCart(currentCart);
  }

  const handleRemoveItem = (coffee: Coffee) => {
    const changedCart = cart.filter((coffeeItem) => coffeeItem.id !== coffee.id);
    setCart(changedCart);
  }

  const handleSubmitOrder = () => {
   navigate('/finished');
  }

  return (
    <Container>
      <HeaderTitle>Cafés selecionados</HeaderTitle>
      
      <CartItemsArea>
        { cart.map((coffee) => (
          <CartItem key={ coffee.id }>
            <img src={ CoffeImg } alt="" />
            <CartItemDescription>

              <CoffeItemHeader>
                <p>{ coffee.title }</p>
                <p>R$ { coffee.price }</p>
              </CoffeItemHeader>

              <CoffeItemInfo>
                <ItemQuantityArea>
                  <button onClick={ () => handleDecreaseQuantity(coffee) }><Minus /></button>
                  <span>{ coffee.quantity }</span>
                  <button onClick={ () => handleIncreaseQuantity(coffee) }><Plus /></button>
                </ItemQuantityArea>
               
                <ItemRemoveButton onClick={ () => handleRemoveItem(coffee) }>
                  <Trash weight="fill" color='#8047F8'/> 
                  <span>Remover</span>
                </ItemRemoveButton>
              </CoffeItemInfo>

            </CartItemDescription>
          </CartItem>
        )) }

        <CartPriceArea>
          <OrderInfo>
            <span>Total de itens</span>
            <span>R$ { totalItemsPrice.toFixed(2) }</span>
          </OrderInfo>

          <OrderInfo>
            <span>Entrega</span>
            <span>R$ { deliveryPrice.toFixed(2) }</span>
          </OrderInfo>

          <OrderInfo>
            <h3>Total</h3>
            <h3>R$ { (totalItemsPrice + deliveryPrice).toFixed(2) }</h3>
          </OrderInfo>

          <FinishOrderButton onClick={ handleSubmitOrder } disabled={disableButton}>
            CONFIRMAR PEDIDO
          </FinishOrderButton>
        </CartPriceArea>

      </CartItemsArea>
    </Container>
  );
}