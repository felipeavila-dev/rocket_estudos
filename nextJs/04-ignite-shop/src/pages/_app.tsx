import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg'
import { CartIcon, Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { ContextProvider } from "../contexts/cartContext";
import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { CartModal } from "../components/CartModal";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

  return (
    <Container>
      <ContextProvider>
        <Header>
          <Image src={logoImg} alt="" />
          <CartIcon onClick={ () => setCartModalIsOpen(!cartModalIsOpen)} />
        </Header>

        { cartModalIsOpen && 
          <CartModal openModal={ setCartModalIsOpen }/>
        }
        
        <Component {...pageProps} />
      </ContextProvider>
    </Container>
  )
}

