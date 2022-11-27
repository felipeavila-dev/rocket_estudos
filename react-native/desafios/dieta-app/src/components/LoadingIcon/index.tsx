import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { Container, LoadingComponent } from './styles';

export const LoadingIcon = () => {
  return (
    <Container>
      <ActivityIndicator size='large' color='#219085' />
    </Container>
  );
}