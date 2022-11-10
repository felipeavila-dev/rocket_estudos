import { styled } from "@stitches/react";
import { X } from "phosphor-react";

export const Container = styled('aside', {
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 99,
  width: 350,

  backgroundColor: '#202024',
  padding: '2rem',
  boxSizing: 'border-box',

  dropShadow: '0px 0px 34px #4444dd',
})

export const CartItem = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  
  marginTop: '1rem',
  marginBottom: '3rem',
})

export const ImageArea = styled('div', {
  width: '100px',
  marginRight: '.75rem',
  borderRadius: 8,
  
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
})

export const DescriptionArea = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',

  p: {
    fontSize: '1rem',
    color: '$gray300',
    marginBottom: '.65rem'
  },

  span: {
    fontWeight: 'bold',
  },

  button: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    color: '$green50',
    fontWeight: 'bold',
    fontSize: '$l',
    border: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    }
  },
})

export const Footer = styled('footer', {
  marginTop: 'auto',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',

    p: {
      color: '$gray300',
    },

    span: {
      color: '$white'
    }
  },

  button: {
    border: 0,
    width: '100%',
    padding: '1rem',
    fontSize: '$l',

    backgroundColor: '$green300',
    color: '$white',
    borderRadius: 8,

    '&:hover': {
      backgroundColor: '$green50',
      cursor: 'pointer'
    }
  }
})

export const CloseModalButton = styled(X, {
  color: '$green300',
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  cursor: 'pointer',

  '&:hover': {
    color: '$green50'
  }
})