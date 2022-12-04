import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { ArrowIcon, Container, Percent, PercentDescription } from './styles';

export const PercentCard = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Statistics');
  }

  return (
    <Container onPress={handleNavigate}>
      <ArrowIcon />
      <Percent>90,85%</Percent>
      <PercentDescription>das refeições dentro da dieta</PercentDescription>
    </Container>
  );
}