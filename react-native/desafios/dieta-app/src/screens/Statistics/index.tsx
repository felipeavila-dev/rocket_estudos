import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { ArrowLeft } from 'phosphor-react-native';
import { BackArrow, BalanceArea, BalanceCard, ClearButton, ClearButtonText, Container, Percent, PercentDescription, StatisticsArea, StatisticsCard, StatisticsTitle, Subtitle, ValueText } from './styles';

type AverageProps = {
  totalMeals: number,
  totalInDiet: number,
  totalOutOfDiet: number,
  percentOutOfDiet: number,
  percentInDiet: number
}

type RouteParams = {
  percentInDiet: number,
  inDiet: number,
  outOfDiet: number,
  totalMeals: number
}

export const Statistics = () => {
  const navigation = useNavigation();
  const {COLORS} = useTheme();

  const route = useRoute();
  const {percentInDiet, inDiet, outOfDiet, totalMeals} = route.params as RouteParams;

  const clearLocalStorage = async() => {
    await AsyncStorage.clear();
    navigation.navigate('Dashboard');
  }

  return(
    <Container color={percentInDiet < 50 ? COLORS.RED_200 : COLORS.GREEN_200}>
      <BackArrow onPress={() => navigation.navigate('Dashboard')}>
        <ArrowLeft color={COLORS.GRAY_600} />
      </BackArrow>

      <Percent color={percentInDiet < 50 ? COLORS.RED_400 : COLORS.GREEN_400}>
        {percentInDiet}%
      </Percent>
      <PercentDescription>das refeições dentro da dieta</PercentDescription>

      <StatisticsArea>
        <StatisticsTitle>Estatísticas gerais</StatisticsTitle>

        <StatisticsCard color={COLORS.GRAY_200}>
          <ValueText>22</ValueText>
          <Subtitle>melhor sequencia de pratos dentro da dieta</Subtitle>
        </StatisticsCard>

        <StatisticsCard color={COLORS.GRAY_200}>
          <ValueText>{totalMeals}</ValueText>
          <Subtitle>refeições registradas</Subtitle>
        </StatisticsCard>

        <BalanceArea>
          <BalanceCard color={COLORS.GREEN_200}>
            <ValueText>{inDiet}</ValueText>
            <Subtitle>refeições dentro da dieta</Subtitle>
          </BalanceCard>

          <BalanceCard color={COLORS.RED_200}>
            <ValueText>{outOfDiet}</ValueText>
            <Subtitle>refeições fora da dieta</Subtitle>
          </BalanceCard>
        </BalanceArea>


        <ClearButton onPress={clearLocalStorage}>
          <ClearButtonText>Apagar todas refeições</ClearButtonText>
        </ClearButton>
      </StatisticsArea>
    </Container>
  );
}