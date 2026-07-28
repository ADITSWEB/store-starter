import type { Alpine } from "alpinejs";
import { productsView } from "./products-view";
// import { productGallery } from "./product-gallery";
import { productDetail } from "./product-detail";

export default (Alpine: Alpine) => {
  Alpine.data("productsView", productsView);
  // Alpine.data( "productGallery", productGallery);
  Alpine.data( "productDetail", productDetail);
};
