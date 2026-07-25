import { featuredProducts } from "../data/products";
export class ProductService{
  static async getAll() {
    return [];
  }

  static async getFeatured() {
    return featuredProducts;
  }
}
