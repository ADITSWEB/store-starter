import type { Product } from "./product";

export type ProductCardSize =
    | "small"
    | "medium"
    | "large";

export type ProductCardOrientation =
    | "vertical"
    | "horizontal";

export type ProductCardVariant =
    | "default"
    | "gallery"
    | "summary"
    | "detail"
    | "compact";

export interface ProductCardProps {

    product: Product;

    size?: ProductCardSize;

    orientation?: ProductCardOrientation;

    variant?: ProductCardVariant;

    priority?: boolean;

}