import styled from "styled-components";

interface InputProps {
  width?: string;
}

export const Container = styled.div`
  display: flex;
`;

export const InputField = styled.input<InputProps>`
  width: ${ props => props.width ? props.width : '100%' };
`;