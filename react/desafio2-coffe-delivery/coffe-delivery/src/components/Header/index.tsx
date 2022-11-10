import { CartArea, Container, InfoArea, LocationArea, LogoArea } from "./styles";

import LogoImg from '../../assets/images/logo.svg';

import { ShoppingCart, MapPin } from 'phosphor-react';
import { useContext } from "react";
import { Context } from "../../contexts/Context";
import { Link } from "react-router-dom";

export const Header = () => {

  const { cart } = useContext(Context);

  return (
    <Container>
      <LogoArea>
        <Link to='/'>
          <img src={ LogoImg } alt="" />
        </Link>
      </LogoArea>
      
      <InfoArea>
        <LocationArea>
          <MapPin size={'1.5rem'} color='#8047F8' weight="fill"/>
          <span>Sorocaba, SP</span>
        </LocationArea>  
        <Link to='/checkout'>
          <CartArea>
              <ShoppingCart size={'1.4rem'} color='#C47F17' weight="fill" />
            <span>{ cart ? cart.length : ''}</span>
          </CartArea>
        </Link>
      </InfoArea>
    </Container>
  );
}