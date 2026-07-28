export function productsView() {
  const saved = localStorage.getItem("product-view");

  return {
    view: saved === "list" || saved === "grid" ? saved : "grid",

    setView(view: "grid" | "list") {
      this.view = view;
      localStorage.setItem("product-view", view);
    },
  };
}
