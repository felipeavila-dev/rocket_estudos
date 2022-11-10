import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Stripe from "stripe";
import { CartContext } from "../../contexts/cartContext";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/product";
import { formatCurrency } from "../../utils/formatCurrency";

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    description: string,
    defaultPriceId: string,
  }
}

const Product = ({ product }: ProductProps) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const { setCart, cart } = useContext(CartContext);

  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading...</p>
  }

  const handleBuyProduct = async () => {
    setIsRedirecting(true);

    try {
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsRedirecting(false);
      alert('Falha ao redirecionar para o checkout!')
    }
  }

  const handleAddToCart = () => {
    const currentProduct = {
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price, 
        descripion: product.description,
        priceId: product.defaultPriceId
    }

    setCart([...cart, currentProduct]);
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={520} alt={product.name} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formatCurrency(product.price)}</span>
          <p>{product.description}</p>   

          <button onClick={handleAddToCart} >Adicionar ao carrinho</button>     
          {/* <button onClick={handleBuyProduct} disabled={isRedirecting}>Comprar agora</button>      */}
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_MYnjYdwDTUYEhX' }}
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params.id);  

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: (price.unit_amount / 100),
        descripion: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1,
  }
}

export default Product;