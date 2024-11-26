import { Image } from "./Image";

export interface Product {
  colors: any;
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image?: Image[];
}
