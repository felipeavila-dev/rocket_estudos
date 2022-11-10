import Image from "next/image";
import { HomeContainer, Product } from "../styles/home";

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'

import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { formatCurrency } from "../utils/formatCurrency";
import Link from "next/link";
import Head from "next/head";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/cartContext";
import axios from "axios";

interface HomeProps {
  products: {
      id: string,
      name: string,
      imageUrl: string,
      price: number,
  }[]
}

const animation = { duration: 10000, easing: (t) => t }

export default function Home({ products }: HomeProps) {
  // const [isRedirecting, setIsRedirecting] = useState(false);

  const {cart} = useContext(CartContext);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 36
    },
    // loop: true,
    // renderMode: 'performance',
    // drag: false,
    // created(s) {
    //   s.moveToIdx(1, true, animation)
    // },
    // updated(s) {
    //   s.moveToIdx(s.track.details.abs + 1, true, animation)
    // },
    // animationEnded(s) {
    //   s.moveToIdx(s.track.details.abs + 1, true, animation)
    // },
  })

  // const handleFinishOrder = async () => {
  //   const productsObj = cart.map((item) => {
  //     return  { price: item.priceId, quantity: 1 }
  //   })

  //   try {
  //     setIsRedirecting(true);

  //     const response = await axios.post('/api/checkout', { priceId: productsObj });

  //     const { checkoutUrl } = response.data;

  //     window.location.href = checkoutUrl;
  //   } catch (error) {
  //     setIsRedirecting(false);
  //     alert('Falha ao redirecionar para o checkout!')
  //   }
  // }
  
  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
      { products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
          <Product className="keen-slider__slide" >
            <Image src={product.imageUrl} width={420} height={420} alt='' />
            <footer>
              <strong>{ product.name }</strong>
              <span>{formatCurrency(product.price)}</span>
            </footer>
          </Product>
        </Link>
      ))}
    </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: (price.unit_amount / 100),
    }
  })

  return {
    props: { products },
    revalidate: 60 * 60 * 2
  }
}
