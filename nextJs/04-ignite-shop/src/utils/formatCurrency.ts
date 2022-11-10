export const formatCurrency = (price: number) => {
  const result = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);

  return result;
}