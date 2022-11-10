import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 1rem;
  padding: 1rem 6rem;
`;

export const OrderArea = styled.div`
`;

export const HeaderTitle = styled.h3`
  margin: 1rem 0;
`

export const OrderForm = styled.div`
  background-color: ${ props => props.theme.colors.card };
  border-radius: 8px;
  padding: 1rem;

  p, small {
    color: ${ props => props.theme.colors.subtitle };
  }
`

export const CheckoutHeader = styled.div`
  display: flex;  
  align-items: baseline;
`;

export const OrderIcon = styled.div`
  margin-right: .5rem;
`;
export const OrderTitle = styled.div`
  p {
    font-size: 1.3rem; 
    font-weight: lighter;
    margin-bottom: .5rem;

  }

  small {
    font-size: 1rem;
  }
`;

export const FormArea = styled.form`
`;

export const FormLine = styled.div`
  display: flex;
  margin: 1rem 0;

  input {
    border-radius: 4px;
    border: 1px solid ${ props => props.theme.colors.button };
    outline: none;
    padding: .75rem; 
    margin: 0 .5rem;
    background-color: ${ props => props.theme.colors.input };
    font-size: 1.2rem;
    color: ${ props => props.theme.colors.label };

    &::placeholder {
      font-size: 1rem;
    }
  }
`;

export const PaymentArea = styled(OrderForm)`
  margin-top: 2rem;
`;

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin: 1.5rem 0;
`;

