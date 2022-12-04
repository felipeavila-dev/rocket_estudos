import React from 'react';
import { Avatar, Container, Logo, UserImage } from './styles';

import LogoIcon from '../../assets/logo.png';
import AvatarImage from '../../assets/avatar.jpg';
import { Image, View } from 'react-native';

export const Header = () => {
  return (
    <Container>
      <Logo source={LogoIcon} />
      <Avatar>
        <UserImage source={AvatarImage}/>
      </Avatar>
    </Container>
  );
}