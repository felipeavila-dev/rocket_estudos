import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem;

  background-color: ${ props => props.theme.colors.background }
`;

export const LogoArea = styled.div``;

export const InfoArea = styled.div`
  display: flex;
  align-items: center;
`;

export const LocationArea = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-right: 1rem;
  border-radius: 8px;

  background-color: ${ props => props.theme.colors.purple_light };

  span {
    color: ${ props => props.theme.colors.purple };
  }
`;

export const CartArea = styled.div`
  background-color: ${ props => props.theme.colors.yellow_light };
  padding: 5px 8px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;

  span {
    text-align: center;
    position: absolute;
    top: -10px;
    background-color: ${ props => props.theme.colors.yellow_dark };
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;
    color: ${ props => props.theme.colors.white };
    font-size: .8rem;
  }
`;

