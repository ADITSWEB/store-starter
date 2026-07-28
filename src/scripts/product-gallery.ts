import type { ProductImage } from "@/types/product";

export function productGallery(config: { images: ProductImage[] }) {

  const { images } = config;

  return {

      images: images ?? [],
      selectedIndex: 0,
      get selectedImage() {
          return this.images[this.selectedIndex];
      },
      select(index: number) {
          this.selectedIndex = index;
      }
  };
}