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
  average: AverageProps
}

export const PercentCard = ({average}: PercentCardProps) => {  
  const navigation = useNavigation();
  const { COLORS } = useTheme();

  const handleNavigate = () => {
    navigation.navigate('Statistics');
  }
  
  return (
    <Container
      color={average.percentInDiet >= 50 ? COLORS.GREEN_200 : COLORS.RED_200}
      onPress={handleNavigate}
    >
      <ArrowIcon />
      <Percent>
        {isNaN(average.percentInDiet) ? 0 : average.percentInDiet}%
      </Percent>
      <PercentDescription>das refeições dentro da dieta</PercentDescription>
    </Container>
  );
}