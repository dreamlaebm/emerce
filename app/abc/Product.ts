export default interface Product {
  name: string;
  description: string;
  imageURL: string;
  price: number;
}

export interface productInfo {
  id: string;
  product: Product;
}
