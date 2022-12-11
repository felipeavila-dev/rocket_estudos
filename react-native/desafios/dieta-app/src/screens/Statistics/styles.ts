import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from 'phosphor-react-native';
import styled from "styled-components/native";

type CardProps = {
  color: string,
}

export const Container = styled(SafeAreaView)<CardProps>`
  position: relative;
  flex: 1;
  align-items: center;
  background-color: ${props => props.color};
`

export const Percent = styled.Text<CardProps>`
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
  font-size: ${props => props.theme.FONT_SIZE.XLG};
  color: ${props => props.color};
  margin-top: 50px;
`
export const PercentDescription = styled.Text`
  font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
  font-size: ${props => props.theme.FONT_SIZE.MD};
` 

export const StatisticsArea = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 50px;
  border-radius: 32px;
  width: 100%;
  padding: 24px;
  background-color: ${props => props.theme.COLORS.WHITE};
`

export const StatisticsTitle = styled.Text`
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
  font-size: ${props => props.theme.FONT_SIZE.LG};
  margin-bottom: 24px;
`

export const StatisticsCard = styled.View<CardProps>`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: ${props => props.color};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`

export const ValueText = styled.Text`
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
  font-size: ${props => props.theme.FONT_SIZE.XLG};
`

export const Subtitle = styled.Text`
  font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
  font-size: ${props => props.theme.FONT_SIZE.MD};
  text-align: center;
`

export const BalanceArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
`

export const BalanceCard = styled.View<CardProps>`
  align-items: center;
  justify-content: center;
  width: 47%;
  height: 100px;
  background-color: ${props => props.color};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`

export const BackArrow = styled.TouchableOpacity`
position: absolute;
top: 60px;
left: 24px;
`

export const ClearButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  border-radius: 6px;
  margin-top: auto;
  background-color: ${props => props.theme.COLORS.GRAY_600};
`

export const ClearButtonText = styled.Text`
  color: white;
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
`;
