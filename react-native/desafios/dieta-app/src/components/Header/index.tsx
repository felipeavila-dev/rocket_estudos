import React from 'react';
import { Avatar, Container, Logo } from './styles';

import LogoIcon from '../../assets/logo.png';
import { Image, View } from 'react-native';

export const Header = () => {
  return (
    <Container>
      <Logo source={LogoIcon} />
      <Avatar></Avatar>
    </Container>
  );
}