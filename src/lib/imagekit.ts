import type { Category, CategoryImage } from "@/types/category";
import type { Product, ProductImage } from "@/types/product";
import type {  StoreImage } from "@/types/store";

export function productImage(product: Product): ProductImage {
  if (!product) return {
    url: '#',
    alt: '',
  }
  return ({
    url: `${import.meta.env.IMAGE_KIT_BASE}/products/${product.id}/product.jpg`,
    alt: product.name,
  })
}

export function storeImage(key: string):  StoreImage  {
  if (!key) return {
    url: '#',
    alt: '',
  }
  return ({
    url: `${import.meta.env.IMAGE_KIT_BASE}/store/${key}.jpg`,
    alt: key,
  })
}

export function categoryImage(category: Category ):  CategoryImage  {
  if (!category) return {
    url: '#',
    alt: '',
  }
  return ({
    url: `${import.meta.env.IMAGE_KIT_BASE}/categories/${category.id}/category.jpg`,
    alt: category.name,
  })
}