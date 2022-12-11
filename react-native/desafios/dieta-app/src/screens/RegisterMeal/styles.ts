import { SafeAreaView } from "react-native-safe-area-context";
import { Circle } from 'phosphor-react-native';
import styled from "styled-components/native";

type InDietProps = {
  inDiet: string,
  color: string
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.COLORS.GRAY_400};
`
export const Header = styled.View`
  position: relative;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 32px;
`

export const BackArrow = styled.TouchableOpacity`
position: absolute;
left: 24px;
`

export const Title = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.LG};
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
`

export const MainArea = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${props => props.theme.COLORS.WHITE};
  border-radius: 24px;
`

export const InputArea = styled.View`
  margin-bottom: 24px;
`

export const Label = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.MD};
  font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
`

export const Input = styled.TextInput`
  display: flex;
  padding: 8px;
  font-size: ${props => props.theme.FONT_SIZE.LG};
  text-align-vertical: top;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.COLORS.GRAY_400};
`
export const DateArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const DatePickerArea = styled.View`
  width: 49%;
  margin-bottom: 24px;
`

export const DatePickerButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.COLORS.GRAY_600};
  height: 40px;
  border-radius: 6px;
`

export const ButtonText = styled.Text`
  color: ${props => props.theme.COLORS.WHITE};
  font-size: ${props => props.theme.FONT_SIZE.LG};
`

export const MealStatusArea = styled.View`
  margin-top: 40px;
`
export const MealStatusTitle = styled.Text`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.FONT_SIZE.MD};
`

export const MealStatusText = styled.Text`
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  font-size: ${props => props.theme.FONT_SIZE.LG};
`

export const GreenCircleIcon = styled(Circle).attrs((props) => ({
  weight: 'fill',
  size: 16,
  color: props.theme.COLORS.GREEN_400
}))`
`

export const RedCircleIcon = styled(Circle).attrs((props) => ({
  weight: 'fill',
  size: 16,
  color: props.theme.COLORS.RED_400
}))`
`

export const MealsStatusButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const StatusButton = styled.TouchableOpacity<InDietProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 49%;
  height: 50px;
  border-radius: 6px;
  background-color: ${props => props.color};

  border: 1px solid ${props => props.inDiet === 'selected' ? props.theme.COLORS.GRAY_600 : 'transparent'};
`;

export const SaveButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin-top: auto;
  background-color: ${props => props.theme.COLORS.GRAY_600};
  border-radius: 4px;
`;
