import styled from "styled-components";

export const Container = styled.div``;

export const CoffeeItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  padding: 1rem 2rem;
  text-align: center;
  background-color: ${ props => props.theme.colors.card };
  border-radius: 8px 32px 8px 32px; 


`;

export const CoffeeInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    margin-top: -2rem;
  }

  span {
    padding: .25rem 1.5rem;
    border-radius: 8px;
    font-size: .75rem;
    font-weight: bold;
    margin: 1rem 0;
    color: ${ props => props.theme.colors.yellow_dark };
    background-color: ${ props => props.theme.colors.yellow_light };
  }

  h3 {
    color: ${ props => props.theme.colors.title };
  }

  small {
    color: ${ props => props.theme.colors.label };
  }
`;


export const PriceArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;

  >span {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    color: ${ props => props.theme.colors.text };
    
    small {
      font-size: .75rem;
      margin-right: .5rem;
    }
  }
`;

export const QuantityArea = styled.div`
  display: flex;
  background-color: ${ props => props.theme.colors.button };
  padding: .5rem .75rem;
  border-radius: 8px;
  margin: 0 .5rem;

  span {
    display: block;
    margin: 0 .25rem;
    font-size: 1.2rem;
  }

  button {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    padding: 0 .25rem;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;

    &:hover {
      opacity: .7;
    }
  }
`;

export const CartIconArea = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .35rem;
  border-radius: 8px;
  background-color: ${ props => props.theme.colors.purple_dark };
  border: none;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
`;