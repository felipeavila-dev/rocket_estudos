import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  
  h2 {
    color: ${ props => props.theme.colors.subtitle }
  }
`;

export const TitleArea = styled.div``;

export const CoffeesArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: 2rem 0;

  span {
    display: block;
  }
`;

// 



