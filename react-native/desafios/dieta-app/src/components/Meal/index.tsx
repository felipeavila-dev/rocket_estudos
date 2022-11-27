import React from 'react';
import { Container, Flag, MealName, MealTime, MealTimeContainer } from './style';

type MealProps = {
  item: string
}

export const Meal = ({ item }: MealProps) => {
  return (
    <Container>
      <MealTimeContainer>
        <MealTime>20:00</MealTime>
      </MealTimeContainer>
      <MealName>{item}</MealName>
      <Flag />
    </Container>
  );
}
