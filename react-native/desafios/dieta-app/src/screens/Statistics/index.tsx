import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ArrowLeft } from 'phosphor-react-native';

import { useTheme } from 'styled-components';
import { BackArrow, BalanceArea, BalanceCard, Container, Percent, PercentDescription, StatisticsArea, StatisticsCard, StatisticsTitle, Subtitle, ValueText } from './styles';
import { useNavigation } from '@react-navigation/native';

type AverageProps = {
  totalMeals: number,
  totalInDiet: number,
  totalOutOfDiet: number,
  percentOutOfDiet: number,
  percentInDiet: number
}

export const Statistics = () => {
  const [average, setAverage] = useState<AverageProps>({} as AverageProps);
  
  const navigation = useNavigation();
  const {COLORS} = useTheme();

  const getDataFromStorage = async() => {
    const storageData = await AsyncStorage.getItem('average');
    if(storageData) {
      setAverage(JSON.parse(storageData));
    }
  }
  
  useEffect(() => {
    getDataFromStorage();
  },[]);

  return(
    <Container color={average.percentInDiet < 50 ? COLORS.RED_200 : COLORS.GREEN_200}>
      <BackArrow onPress={() => navigation.navigate('Dashboard')}>
        <ArrowLeft color={COLORS.GRAY_600} />
      </BackArrow>

      <Percent color={average.percentInDiet < 50 ? COLORS.RED_400 : COLORS.GREEN_400}>
        {average.percentInDiet}%
      </Percent>
      <PercentDescription>das refeições dentro da dieta</PercentDescription>

      <StatisticsArea>
        <StatisticsTitle>Estatísticas gerais</StatisticsTitle>

        <StatisticsCard color={COLORS.GRAY_200}>
          <ValueText>22</ValueText>
          <Subtitle>melhor sequencia de pratos dentro da dieta</Subtitle>
        </StatisticsCard>

        <StatisticsCard color={COLORS.GRAY_200}>
          <ValueText>{average.totalMeals}</ValueText>
          <Subtitle>refeições registradas</Subtitle>
        </StatisticsCard>

        <BalanceArea>
          <BalanceCard color={COLORS.GREEN_200}>
            <ValueText>{average.totalInDiet}</ValueText>
            <Subtitle>refeições dentro da dieta</Subtitle>
          </BalanceCard>

          <BalanceCard color={COLORS.RED_200}>
            <ValueText>{average.totalOutOfDiet}</ValueText>
            <Subtitle>refeições fora da dieta</Subtitle>
          </BalanceCard>
        </BalanceArea>

      </StatisticsArea>
    </Container>
  );
}