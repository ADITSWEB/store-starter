interface ProductImage {
  url: string;
  alt?: string;
  order: number;
}
export interface Product {
  id: string;
  name: string;
  price: number;
  images: ProductImage[];
  badge?: string;
}