import styled from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native';

type CardProps = {
  color: string;
}

export const Container = styled.TouchableOpacity<CardProps>`
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-radius: 8px;
  margin: 24px 0;
  background-color: ${props => props.color};
`

export const Percent = styled.Text`
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
  font-size: ${props => props.theme.FONT_SIZE.XLG};
`

export const PercentDescription = styled.Text`
  font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
  font-size: ${props => props.theme.FONT_SIZE.MD};
`
export const ArrowIcon = styled(ArrowUpRight).attrs((props) => ({
  size: 20,
  color: props.theme.COLORS.GREEN_400
}))`
  position: absolute;
  right: 10px;
  top: 10px;
`