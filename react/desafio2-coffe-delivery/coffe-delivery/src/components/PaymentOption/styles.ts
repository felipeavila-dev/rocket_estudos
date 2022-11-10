import styled from "styled-components";

interface ContainerProps {
  selectedMethod: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  background-color: ${ props => props.theme.colors.button };
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  color: ${ props => props.theme.colors.text };
  border: ${ props => props.selectedMethod ? `1px solid ${ props.theme.colors.text }` : ''};

  &:hover {
    cursor: pointer;
    opacity: .8;
  }

  span {
    margin-left: .5rem;
  }

  .selectedPayment {
    border: 1px solid red;
  }
`;