import React from 'react';
import { Text } from 'react-native';
import { AddButton, AddIcon, ButtonText, Container, Legend } from './styles';

export const NewMealsButton = () => {
  return (
    <Container>
      <Legend>Refeições</Legend>
      <AddButton>
        <AddIcon />
        <ButtonText>Nova Refeição</ButtonText>
      </AddButton>
    </Container>
  );
}