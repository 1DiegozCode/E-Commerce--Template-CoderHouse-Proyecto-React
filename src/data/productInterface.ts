export default interface Product {
  name: string;
  image: string;
  description: string;
  category: 'ps' | 'xbox' | 'nintendo' | 'pc' | 'null';
  stock: number;
  price: number;
  oldPrice: number;
}