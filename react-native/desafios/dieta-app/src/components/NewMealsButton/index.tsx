import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { AddButton, AddIcon, ButtonText, Container, Legend } from './styles';

export const NewMealsButton = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Legend>Refeições</Legend>
      <AddButton onPress={() => navigation.navigate('Register')}>
        <AddIcon />
        <ButtonText>Nova Refeição</ButtonText>
      </AddButton>
    </Container>
  );
}