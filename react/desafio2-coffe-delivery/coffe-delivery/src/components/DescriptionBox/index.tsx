import { Container, IconArea, TextArea } from "./styles";

import { ShoppingCart } from 'phosphor-react';


interface DescriptionBoxProps {
  text: string;
  bgColor: string;
  children: React.ReactNode;
  secondText?: string;
}

export const DescriptionBox = ({ text, bgColor, children, secondText }: DescriptionBoxProps) => {
  return (
    <Container>
      <IconArea color={ bgColor }>
        { children }
      </IconArea>

      <TextArea>
        <span>{ text }</span>
        <span className='add-bold'>{ secondText }</span>
      </TextArea>
    </Container>
  );
}