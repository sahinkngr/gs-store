import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [] as { name: string; price: number; image: string; size: string }[],
  }),

  getters: {
    totalPrice: (state) => {
      return state.cartItems.reduce((total, item) => total + item.price, 0);
    },
  },

  actions: {
    addToCart(item: { name: string; price: number; image: string; size: string }) {
      this.cartItems.push(item);
    },

    removeFromCart(index: number) {
      this.cartItems.splice(index, 1);
    },
  },
});