import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header';
import { Container } from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Text>Ola mundo!</Text>
    </Container>
  );
}