import React from 'react';
import { Header } from '../../components/Header';
import { NewMealsButton } from '../../components/NewMealsButton';
import { PercentCard } from '../../components/PercentCard';
import { Container } from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Header />

      <PercentCard />

      <NewMealsButton />
    </Container>
  );
}