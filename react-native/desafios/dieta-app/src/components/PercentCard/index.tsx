import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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

export const PercentCard = () => {
  const [average, setAverage] = useState<AverageProps>({} as AverageProps);
  
  const navigation = useNavigation();
  const { COLORS } = useTheme();

  const handleNavigate = () => {
    navigation.navigate('Statistics');
  }

  const getDataFromStorage = async() => {
    const storageData = await AsyncStorage.getItem('average');
    if(storageData) {
      setAverage(JSON.parse(storageData));
    }
  }

  useEffect(() => {
    getDataFromStorage();
  }, []);

  return (
    <Container
      color={average.percentInDiet >= 50 ? COLORS.GREEN_200 : COLORS.RED_200}
      onPress={handleNavigate}
    >
      <ArrowIcon />
      <Percent>
        {average.percentInDiet}%
      </Percent>
      <PercentDescription>das refeições dentro da dieta</PercentDescription>
    </Container>
  );
}