import type { Product } from "@/types/product";
import { featuredProducts } from "../data/products";
import { API } from ".";
import { ApiClient } from "./APIClient";
import { productImage } from "@/lib/imagekit";

const api = new ApiClient(
  import.meta.env.PUBLIC_API_BASE,
  'products'
);
export class ProductService{
  static _populateWImages (products: Product[] | Product) : Product | Product[] {
    if (products instanceof Array) {
      return products.map(product => ({
        ...product,
        images: [productImage(product)],
      }));
    }
    return {
      ...products,
      images: [productImage(products)],
    };
  }
  static async getAll() {
    // return products;
    const products = await api.get<Product[]>();
    return this._populateWImages(products) as Product[];
  }

  static async getFeatured() {
    return this._populateWImages(featuredProducts) as Product[];
  }

  static async getById(id: string): Promise<Product> {
    const product = await api.get<Product>( { id });
    return this._populateWImages(product) as Product;
  }

  static async getRelated(categoryId: string,productId: string, limit?: number) {
    const product = await api.get<Product>({ action : 'related', categoryId, productId, limit });
    return this._populateWImages(product);
  }
}
