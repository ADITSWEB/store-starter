import { categories } from "@/data/categories";

import { API } from ".";
import { ApiClient } from "./APIClient";
import type { Category } from "@/types/category";
import { categoryImage } from "@/lib/imagekit";

const api = new ApiClient(
  import.meta.env.PUBLIC_API_BASE,
  'categories'
);
export class CategoryService {
  static _populateWithImage(category: Category | Category[]): Category | Category[] {
    if (category instanceof Array) {
      return category.map(category => ({
        ...category,
        images: [categoryImage(category)],
      }));
    } else {
      return {
        ...category,
        image: categoryImage(category),
        // icon: categoryIcon(category),
      };
    }
  }
  static async getAll() {
    return this._populateWithImage(categories) as Category[];
    // return api.get<Category[]>(API.CATEGORIES);
  }

}