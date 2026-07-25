import { categories } from "@/data/categories";
export class CategoryService {
  static async getAll() {
    return categories;
  }
}