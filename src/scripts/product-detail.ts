export function productDetail(product: any) {
    console.log(product);
    return {
        product,
        images: product.images ?? [],
        selectedIndex: 0,
        quantity: 1,
        init() {
            if (!this.images.length) {
                console.warn("Product has no images.");
            }
        },

        get selectedImage() {
            return this.images[this.selectedIndex] ??
                {
                    url: "",
                    alt: ""
                };
        },

        select(index: number) {
            if (
                index >= 0 &&
                index < this.images.length
            ) {
                this.selectedIndex = index;
            }
        },

        increaseQuantity() {
            this.quantity++;
        },

        decreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        }
    };

}