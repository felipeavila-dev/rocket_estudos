import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 6rem;
`;

export const BannerArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const LeftSide = styled.div`
  flex: 1;

  h1 {
    font-size: 3rem;
    color: ${ props => props.theme.colors.title } 
  }

  p {
    color: ${ props => props.theme.colors.subtitle };
    font-size: 1.5rem;
  }
`;

export const TextArea = styled.div``;

export const ItemsArea = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const RightSide = styled.div`
  width: 40%;
`;

