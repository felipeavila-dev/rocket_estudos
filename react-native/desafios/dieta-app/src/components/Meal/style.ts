import styled from "styled-components/native";
import { Circle } from 'phosphor-react-native';

type FlagProps = {
  diet: boolean
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  border: 1px solid ${props => props.theme.COLORS.GRAY_200};
  border-radius: 4px;
  padding: 12px;
`

export const MealTimeContainer = styled.View`
  border-right-width: 1px;
  border-right-color: ${props => props.theme.COLORS.GRAY_200};
`;

export const MealTime = styled.Text`
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
  margin-right: 8px;
  border-right: 1px solid ${props => props.theme.COLORS.GRAY_600};
`

export const MealName = styled.Text`
  flex: 1;
  margin-left: 8px;
`

export const GreenFlag = styled(Circle).attrs((props) => ({
  color: props.theme.COLORS.GREEN_200,
  weight: 'fill',
  size: 16
}))``


export const RedFlag = styled(Circle).attrs((props) => ({
  color: props.theme.COLORS.RED_200,
  weight: 'fill',
  size: 16
}))``