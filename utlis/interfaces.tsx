export interface product {
    id: number;
    name: String;
    price: number;
    image: String;
}

export interface ProductProps {
    fontClassName: string;
    products: product[];
  }