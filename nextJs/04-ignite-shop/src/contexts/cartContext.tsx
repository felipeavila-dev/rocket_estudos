import { createContext, useState } from "react";

interface ProductProps {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    description: string,
    priceId: string,
}

interface CartContextProps {
  cart: ProductProps[],
  setCart: React.Dispatch<any>,
}

export const CartContext = createContext({} as CartContextProps);

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState<ProductProps[]>([]);

  return (
    <CartContext.Provider value={
      {
        cart,
        setCart
      }
    }>
      {children}
    </CartContext.Provider>
  )
}

