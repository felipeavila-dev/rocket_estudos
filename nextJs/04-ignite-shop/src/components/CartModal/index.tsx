import axios from "axios";
import Image from "next/image";
import { useContext, useState } from "react"
import { CartContext } from "../../contexts/cartContext"
import { formatCurrency } from "../../utils/formatCurrency";
import { CartItem, CloseModalButton, Container, DescriptionArea, Footer, ImageArea } from "./styles"

export const CartModal = ({ openModal }) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const { cart, setCart } = useContext(CartContext);

  const calculateTotal = cart.reduce((acc, item) => {
    return acc += item.price;
  }, 0)

  const handleFinishOrder = async () => {
    const productsObj = cart.map((item) => {
      return  { price: item.priceId, quantity: 1 }
    })

    try {
      setIsRedirecting(true);

      const response = await axios.post('/api/checkout', { priceId: productsObj });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsRedirecting(false);
      alert('Falha ao redirecionar para o checkout!')
    }
  }

  const handleRemoveCartItem = (id) => {
    const actualCart = cart.filter((item) => item.id !== id);
    console.log(actualCart);
    setCart(actualCart);
  }

  return (
    <Container>
      <h1>Sacola de compras</h1>
      { cart.map((item) => (
        <CartItem key={item.id}>
          <ImageArea>
            <Image src={item.imageUrl} width={100} height={100} alt={item.name} />
          </ImageArea>

          <DescriptionArea>
            <p>{item.name}</p>
            <span>{formatCurrency(item.price)}</span>

            <button onClick={() => handleRemoveCartItem(item.id)}>Remover</button>
          </DescriptionArea>
        </CartItem>
      ))}

      <Footer>
        <div>
          <p>Quantidade</p>
          <span>{cart.length} {cart.length > 1 ? 'itens' : 'item' }</span>
        </div>
        <div>
          <p>Valor total</p>
          <span>{formatCurrency(calculateTotal)}</span>
        </div>
        <button onClick={handleFinishOrder} disabled={isRedirecting}>Finalizar carrinho</button>
      </Footer>

      <CloseModalButton size={24} onClick={ () => openModal(false) }/>
    </Container>
  )
}