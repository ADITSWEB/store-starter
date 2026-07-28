export interface StoreImage {
    url?: string;
    alt?: string;
}
export interface Store {
    name: string;
    tagline: string;
    description: string;
    email?: string;
    phone?: string;
    city?: string;
    instagram?: string;
    logo?: StoreImage;
    hero?: StoreImage;
    whatsapp?: string;
    address?: string;
}