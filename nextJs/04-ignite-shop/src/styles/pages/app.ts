import { ShoppingCart } from "phosphor-react";
import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const CartIcon = styled(ShoppingCart, {
  color: '$green300',
  width: 32,
  height: 32,

  '&:hover': {
    color: '$green50',
    cursor: 'pointer'
  }
});