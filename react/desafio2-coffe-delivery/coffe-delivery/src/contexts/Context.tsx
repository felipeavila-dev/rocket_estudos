import { createContext, useState } from "react";

interface Coffee {
  id: number;
  title: string;
  tag: string;
  description: string;
  price: number;
  quantity: number;
}

interface UserAddress {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  numero: string;
  complemento: string;
  uf: string;
}

interface ContextInterface {
  cart: Coffee[];
  setCart: React.Dispatch<any>;
  paymentMethod: 'Crédito' | 'Débito' | 'Dinheiro';
  setPaymentMethod: React.Dispatch<any>;
  userAddress: UserAddress;
  setUserAddress: React.Dispatch<any>;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const Context = createContext({} as ContextInterface);

export const ContextProvider = ({ children }: ProviderProps) => {
  const [cart, setCart] = useState<Coffee[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<'Crédito' | 'Débito' | 'Dinheiro'>('Dinheiro');
  const [userAddress, setUserAddress] = useState<UserAddress>({
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    numero: '',
    complemento: '',
    uf: ''
  });

  const providerObj = { cart, setCart, paymentMethod, setPaymentMethod, userAddress, setUserAddress }

  return(
    <Context.Provider value={ providerObj }>
      { children }
    </Context.Provider>
  );
}