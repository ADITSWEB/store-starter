import type { Category } from "./category";

export interface ProductImage {
  url: string;
  alt: string;
  order?: number;
  mimeType?: string;
}
export interface Product {
  id: string;
  name: string;
  shortDescription?: string;
  price: number;
  images: ProductImage[];
  category?: Category;
  categorId?: string;
  badge?: string;
  sku?: string;
  stockStatus?: "in-stock" | "out-of-stock" | "preorder";
}