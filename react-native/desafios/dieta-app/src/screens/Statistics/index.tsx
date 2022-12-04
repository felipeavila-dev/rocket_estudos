import React from 'react';
import { useTheme } from 'styled-components';
import { BalanceArea, BalanceCard, Container, Percent, PercentDescription, StatisticsArea, StatisticsCard, StatisticsTitle, Subtitle, ValueText } from './styles';

export const Statistics = () => {
  const {COLORS} = useTheme();
  return(
    <Container>
      <Percent>90,85%</Percent>
      <PercentDescription>das refeições dentro da dieta</PercentDescription>

      <StatisticsArea>
        <StatisticsTitle>Estatísticas gerais</StatisticsTitle>

        <StatisticsCard color={COLORS.GRAY_200}>
          <ValueText>22</ValueText>
          <Subtitle>melhor sequencia de pratos dentro da dieta</Subtitle>
        </StatisticsCard>

        <StatisticsCard color={COLORS.GRAY_200}>
          <ValueText>109</ValueText>
          <Subtitle>refeições registradas</Subtitle>
        </StatisticsCard>

        <BalanceArea>
          <BalanceCard color={COLORS.GREEN_200}>
            <ValueText>22</ValueText>
            <Subtitle>refeições dentro da dieta</Subtitle>
          </BalanceCard>

          <BalanceCard color={COLORS.RED_200}>
            <ValueText>22</ValueText>
            <Subtitle>refeições fora da dieta</Subtitle>
          </BalanceCard>
        </BalanceArea>

      </StatisticsArea>
    </Container>
  );
}