import type { Product } from "../types/product";


export const products: Product[] = [
  {
    id: "P0001",
    name: "Handcrafted Wooden Bowl",
    price: 799,
    images: [{
      url: "/store-starter/images/store/products/P0001/P0001.jpg",
      alt: "Handcrafted Wooden Bowl",
      order: 1
    }
    ],
    badge: "New"
  },
  {
    id: "P0006",
    name: "Anklet",
    price: 349,
    images: [{
      url: "/store-starter/images/store/products/P0006/P0006.jpg",
      alt: "Anklet",
      order: 1
    }
    ],
  },
  {
    id: "P0009",
    name: "Ceramic Vase",
    price: 1299,
    images: [{ url: "/store-starter/images/store/products/P0009/P0009.jpg",
      alt: "Ceramic Vase",
      order: 1
    }],
    badge: "Popular"
  },
  {
    id: "P0010",
    name: "Ceramic Vase",
    price: 654,
    images: [{ url: "/store-starter/images/store/products/P0010/P0010.jpg",
      alt: "Ceramic Vase",
      order: 5
    }],
    badge: "Hot Selling"
  }
];

export const featuredProducts = [0,1,2,3].map(index => products[index]) as Product[];