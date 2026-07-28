export type ProductCardSize = "small" | "medium" | "large";
export type ProductCardOrientation = "vertical" | "horizontal";
export type ProductCardVariant = "default" | "compact" | "summary" | "gallery" | "detail";
export type ButtonSize = "sm" | "default" | "lg";

export interface ProductCardConfiguration {
  card: string;
  image: string;
  imageWrapper: string;
  title: string;
  description: string;
  price: string;
  spacing: string;
  buttonSize: ButtonSize;
  showCategory: boolean;
  showDescription: boolean;
  showPrice: boolean;
  showActions: boolean;
}

const sizeConfig = {
  small: {
      imageWrapper: "aspect-square",
      image: "size-full object-cover transition-transform duration-300 ease-out group-hover/card:scale-105",
      title: "text-base",
      description: "line-clamp-1 text-sm",
      price: "text-lg",
      spacing: "gap-3",
      buttonSize: "sm"
  },

  medium: {
      imageWrapper: "aspect-[4/5]",
      image: "size-full object-cover transition-transform duration-300 ease-out group-hover/card:scale-105",
      title: "text-lg",
      description: "line-clamp-2",
      price: "text-xl",
      spacing: "gap-4",
      buttonSize: "default"
  },

  large: {
      imageWrapper: "aspect-[3/4]",
      image: "size-full object-cover transition-transform duration-300 ease-out group-hover/card:scale-105",
      title: "text-2xl",
      description: "line-clamp-4",
      price: "text-2xl",
      spacing: "gap-6",
      buttonSize: "lg"
  }
};

const orientationConfig = {
  vertical: {
      card:
          "flex flex-col pt-0",
      imageWrapper:
          "w-full overflow-hidden",
      content:
          "px-6"
  },
  horizontal: {
      card:
          "flex flex-col sm:flex-row",
      imageWrapper:
          "sm:w-56 shrink-0 overflow-hidden rounded-xl",
      content:
          "px-6 sm:px-4"
  }
};

const variantConfig = {
  default: {
      showCategory: true,
      showDescription: true,
      showPrice: true,
      showActions: true
  },

  compact: {
      showCategory: false,
      showDescription: false,
      showPrice: true,
      showActions: false
  },

  summary: {
      showCategory: false,
      showDescription: false,
      showPrice: true,
      showActions: false
  },
  gallery: {
      showCategory: false,
      showDescription: false,
      showPrice: false,
      showActions: false
  },

  detail: {
      showCategory: true,
      showDescription: true,
      showPrice: true,
      showActions: true
  }
};
export function createProductCardConfig(
  size: ProductCardSize = "medium",
  orientation: ProductCardOrientation = "vertical",
  variant: ProductCardVariant = "default"
): ProductCardConfiguration {
  const s = sizeConfig[size as keyof typeof sizeConfig];
  const o = orientationConfig[orientation as keyof typeof orientationConfig];
  const v = variantConfig[variant as keyof typeof variantConfig];

  return {
      card:
          o.card,
      image:
          s.image,
      imageWrapper:
          `${o.imageWrapper} ${s.imageWrapper}`,
      title:
          s.title,
      description:
          s.description,
      price:
          s.price,
      spacing:
          `${s.spacing} ${o.content}`,
      buttonSize:
          s.buttonSize as ButtonSize,
      ...v
  };
}

export const ProductCardPresets = {
  featured:  { size: "medium", orientation: "vertical", variant: "default" },
  grid:      { size: "small",  orientation: "vertical", variant: "default" },
  list:      { size: "medium", orientation: "horizontal", variant: "default" },
  related:   { size: "small",  orientation: "vertical", variant: "compact" },
  hero:      { size: "large",  orientation: "horizontal", variant: "detail" },
  cart:      { size: "small",  orientation: "horizontal", variant: "summary" }
};

export function createProductCardConfigWithPreset(preset: keyof typeof ProductCardPresets): ProductCardConfiguration {
  const { size, orientation, variant } = ProductCardPresets[preset as keyof typeof ProductCardPresets];
  return createProductCardConfig(size as ProductCardSize, orientation as ProductCardOrientation, variant as ProductCardVariant);
}