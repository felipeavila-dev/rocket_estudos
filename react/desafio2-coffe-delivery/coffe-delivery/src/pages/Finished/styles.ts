import styled from "styled-components";

export const Container = styled.div`
  padding: 6rem;

`;
export const HeaderTitle = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    color: ${ props => props.theme.colors.yellow_dark };
  }

  p {
    font-size: 1rem;
    color: ${ props => props.theme.colors.subtitle };
  }
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: space-between;
`
export const OrderStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  padding: 0 3rem;
 
  border: 1px solid ${props => props.theme.colors.yellow_dark};
  /* border-image: linear-gradient(${props => props.theme.colors.purple_dark}, ${props => props.theme.colors.yellow_dark}) 1; */
  border-radius: 8px 32px 8px 32px;
`
export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;

  img {
    width: 80%;
  }
`
