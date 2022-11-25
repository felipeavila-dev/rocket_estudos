import React from 'react';

import { ArrowIcon, Container, Percent, PercentDescription } from './styles';

export const PercentCard = () => {
  return (
    <Container>
      <ArrowIcon />
      <Percent>90,85%</Percent>
      <PercentDescription>das refeições dentro da dieta</PercentDescription>
    </Container>
  );
}