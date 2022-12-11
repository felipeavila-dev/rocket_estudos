import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { ArrowIcon, Container, Percent, PercentDescription } from './styles';
import { useTheme } from 'styled-components';

type AverageProps = {
  totalMeals: number,
  totalInDiet: number,
  totalOutOfDiet: number,
  percentOutOfDiet: number,
  percentInDiet: number
}

type PercentCardProps = {
  totalMeals: number,
  inDiet: number,
  outOfDiet: number,
  percentMeals: number,
}

export const PercentCard = ({totalMeals, percentMeals, inDiet, outOfDiet}: PercentCardProps) => {  

  const navigation = useNavigation();
  const { COLORS } = useTheme();

  const handleNavigate = () => {
    navigation.navigate('Statistics', { 
      percentInDiet: percentMeals,
      inDiet: inDiet,
      outOfDiet: outOfDiet,
      totalMeals: totalMeals,
   });
  }
  
  return (
    <Container
      color={percentMeals >= 50 ? COLORS.GREEN_200 : COLORS.RED_200}
      onPress={handleNavigate}
    >
      <ArrowIcon />
      <Percent>
        {isNaN(percentMeals) ? 0 : percentMeals}%
      </Percent>
      <PercentDescription>das refeições dentro da dieta</PercentDescription>
    </Container>
  );
}