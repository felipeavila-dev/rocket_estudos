import styled from "styled-components";

export const Container = styled.div``;

export const HeaderTitle = styled.h3`
  margin: 1rem 0;
`;

export const CartItemsArea = styled.div`
  background-color: ${ props => props.theme.colors.card };
  padding: 1rem 2rem;
  border-radius: 4px 24px 4px 24px;
`;

export const CartItem = styled.div`
  display: flex;
  border-bottom: 1px solid ${ props => props.theme.colors.button };
  margin-bottom: 1rem;
  padding: 1rem 0;

  img {
    width: 70px;
    margin-right: 1rem;
  }
`;


export const CartItemDescription = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const CoffeItemHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CoffeItemInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

export const ItemQuantityArea =  styled.div`
  background-color: ${ props => props.theme.colors.button };
  display: flex;
  padding: .5rem .6rem;
  border-radius: 4px;
  margin-right: 1rem;

  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    color: ${ props => props.theme.colors.purple };
    font-size: 1rem;
    

     &:hover {
      cursor: pointer;
      opacity: .8;
     }
  }

  span {
    margin: 0 1rem;
    color: ${ props => props.theme.colors.text };

  }
`;

export const ItemRemoveButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${ props => props.theme.colors.button };
  border: none;
  padding: .5rem .6rem;
  font-size: 1rem;
  border-radius: 4px;
  color: ${ props => props.theme.colors.text };

  span {
    margin-left: .5rem;
  }

  &:hover {
    cursor: pointer;
    opacity: .8;
  }

`;

export const CartPriceArea = styled.div``;

export const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${ props => props.theme.colors.text };
  margin-bottom: .8rem;

  h3 {
    font-size: 1.7rem;
  }
`;

export const FinishOrderButton = styled.button`
  width: 100%;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  background-color: ${props => props.disabled ? 'gray' :  props => props.theme.colors.yellow };
  color: ${ props => props.theme.colors.white };
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    opacity: ${props => props.disabled ? '' :  '.8' };
    cursor: ${props => props.disabled ? 'not-allowed' :  'pointer' };
  }


`;