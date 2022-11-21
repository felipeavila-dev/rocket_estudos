import styled from "styled-components/native";

import {MaterialIcons} from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${props => props.theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 6px;
`;

export const Name = styled.Text`
  flex: 1;
  color: ${props => props.theme.COLORS.GRAY_200};
  font-size: ${props => props.theme.FONT_SIZE.MD}px;
  font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
`

export const Icon = styled(MaterialIcons).attrs((props) => ({
  size: 24,
  color: props.theme.COLORS.GRAY_200
}))`
  margin-left: 16px;
  margin-right: 4px;
`