class CartService {
  constructor() {
    const cartItems_LS = JSON.parse(localStorage.getItem("cart-items")) || [];
    this.cartItems = new Set(cartItems_LS);
  }

  saveToLS() {
    const cartItems = Array.from(this.cartItems);
    localStorage.setItem("cart-items", JSON.stringify(cartItems));
  }

  async addToCart(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.cartItems.has(id)) {
          throw new Error("Товар уже существует в корзине");
        }
        this.cartItems.add(id);
        this.saveToLS();
        resolve({ success: true });
      }, 2000);
    });
  }

  async removeFromCart(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!this.cartItems.has(id)) {
          throw new Error("Товар уже существует в корзине");
        }
        this.cartItems.delete(id);
        this.saveToLS();
        resolve({ success: true });
      }, 2000);
    });
  }
}

export default new CartService();
