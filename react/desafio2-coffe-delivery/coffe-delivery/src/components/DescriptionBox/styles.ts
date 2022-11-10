import styled from "styled-components";

interface IconArea {
  color: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const IconArea = styled.div<IconArea>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 1rem;
  
  background-color: ${ props => props.color };
  color: ${ props => props.theme.colors.white };
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: ${ props => props.theme.colors.text };


  .add-bold {
    font-weight: bold;
  }
`;