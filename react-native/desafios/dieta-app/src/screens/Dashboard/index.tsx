import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header';
import { PercentCard } from '../../components/PercentCard';
import { Container } from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Header />

      <PercentCard />
    </Container>
  );
}