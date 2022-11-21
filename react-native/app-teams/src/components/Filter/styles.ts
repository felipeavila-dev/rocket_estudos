import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  /* background-color: ${props => props.theme.COLORS.GRAY_100}; */
  border: 1px solid ${props => props.isActive && props.theme.COLORS.GREEN_700} ;
  border-radius: 4px;
  margin-right: 12px;
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  text-transform: uppercase;
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
  font-size: ${props => props.theme.FONT_SIZE.SM}px;
  color: ${props => props.theme.COLORS.WHITE}
`