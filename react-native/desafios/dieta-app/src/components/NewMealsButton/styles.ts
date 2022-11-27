import styled from "styled-components/native";

import { Plus } from 'phosphor-react-native';

export const Container = styled.View`
`

export const Legend = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE.MD};
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
`
export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.COLORS.GRAY_600};
  border-radius: 6px;
  padding: 16px;
`

export const ButtonText = styled.Text`
  color: ${props => props.theme.COLORS.WHITE};
  font-family: ${props => props.theme.FONT_FAMILY.BOLD};
`

export const AddIcon = styled(Plus).attrs((props) => ({
  color: props.theme.COLORS.WHITE,
  size: 20
}))`
  margin-right: 8px;
`