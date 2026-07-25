export interface Category {
    id: string;
    name: string;
    image?: CategoryImage;
    icon?: string;
    url?: string;
}

export interface CategoryImage {
  url: string;
  alt?: string;
}