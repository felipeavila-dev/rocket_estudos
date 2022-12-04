import React from 'react';
import { Container, GreenFlag, RedFlag, MealName, MealTime, MealTimeContainer } from './style';

type MealProps = {
  item: {
    meal: string,
    diet: boolean
  }
}

export const Meal = ({ item }: MealProps) => {
  return (
    <Container>
      <MealTimeContainer>
        <MealTime>20:00</MealTime>
      </MealTimeContainer>
      <MealName>{item.meal}</MealName>
      {item.diet ? <GreenFlag /> : <RedFlag />}
      
    </Container>
  );
}
