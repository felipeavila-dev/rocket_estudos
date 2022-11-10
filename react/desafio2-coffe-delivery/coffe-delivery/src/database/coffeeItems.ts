interface Coffee {
  id: number;
  title: string;
  tag: string;
  description: string;
  price: number;
}

export const coffeesDatabase: Coffee[] = [
  { id: 1, title: 'Expresso Tradicional', tag: 'Tradicional', description: 'O tradicional café feito com água quente e grãos moídos', price: 9.99 },
  { id: 2, title: 'Expresso Americano', tag: 'Tradicional', description: 'Expresso diluído, menos intenso que o tradicional', price: 14.99 },
  { id: 3, title: 'Expresso Cremoso', tag: 'Tradicional', description: 'Café expresso tradicional com espuma cremosa', price: 10.99 },
  { id: 4, title: 'Expresso Gelado', tag: 'Gelado', description: 'Bebida preparada com café expresso e cubos de gelo', price: 17.99 },
  { id: 5, title: 'Café com Leite', tag: 'Tradicional', description: 'O tradicional café feito com água quente e grãos moídos', price: 7.99 },
  { id: 6, title: 'Expresso Tradicional', tag: 'Com Leite', description: 'Meio a meio de expresso tradicional com leite vaporizado', price: 5.99 },
  { id: 7, title: 'Latte', tag: 'Com Leite', description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa', price: 9.99 },
  { id: 8, title: 'Capuccino', tag: 'Com Leite', description: 'Bebida com canela feita de doses iguais de café, leite e espuma', price: 9.99 },
  { id: 9, title: 'Expresso Tradicional', tag: 'Tradicional', description: 'O tradicional café feito com água quente e grãos moídos', price: 14.99 },
  { id: 10, title: 'Expresso Americano', tag: 'Tradicional', description: 'Expresso diluído, menos intenso que o tradicional', price: 19.99 },
  { id: 11, title: 'Expresso Cremoso', tag: 'Tradicional', description: 'Café expresso tradicional com espuma cremosa', price: 7.99 },
  { id: 12, title: 'Expresso Gelado', tag: 'Gelado', description: 'Bebida preparada com café expresso e cubos de gelo', price: 9.99 },
  { id: 13, title: 'Café com Leite', tag: 'Tradicional', description: 'O tradicional café feito com água quente e grãos moídos', price: 9.99 },
  { id: 14, title: 'Expresso Tradicional', tag: 'Com Leite', description: 'Meio a meio de expresso tradicional com leite vaporizado', price: 9.99 },
  { id: 15, title: 'Capuccino', tag: 'Com Leite', description: 'Bebida com canela feita de doses iguais de café, leite e espuma', price: 9.99 },
];