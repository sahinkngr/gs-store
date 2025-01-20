import { defineStore } from 'pinia';
import { db } from "@/utils/firebase"; // Firebase config
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as Array<{ name: string; price: number; size: string; image: string }>, // Sepetteki ürünler
  }),
  getters: {
    // Sepetteki ürünlerin toplam tutarını hesaplayan getter
    totalPrice: (state) => {
      return state.cartItems.reduce((total, item) => total + item.price, 0);
    },
  },
  actions: {
    // Sepete ürün eklemek
    addToCart(product: { name: string; price: number; size: string; image: string }) {
      this.cartItems.push(product);
      this.saveCartToDatabase(); // Ürünü veritabanına kaydet
    },

    // Sepetten ürün kaldırmak
    removeFromCart(index: number) {
      this.cartItems.splice(index, 1);
      this.saveCartToDatabase(); // Güncellenen sepeti veritabanına kaydet
    },

    // Sepeti veritabanına kaydetmek
    async saveCartToDatabase() {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const userRef = doc(db, "users", user.uid); // Kullanıcıya ait belge
        await setDoc(userRef, { cart: this.cartItems }, { merge: true }); // Sepeti kaydet
      }
    },

    // Veritabanından sepeti al
    async loadCartFromDatabase() {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const userRef = doc(db, "users", user.uid);

        // Veritabanındaki değişiklikleri dinle (onSnapshot ile)
        onSnapshot(userRef, (docSnap) => {
          if (docSnap.exists()) {
            this.cartItems = docSnap.data().cart || []; // Sepeti al
          }
        });
      }
    },

    // Sepeti sıfırlama (Satın alma işlemi sonrası)
    clearCart() {
      this.cartItems = [];
      this.saveCartToDatabase();
    },
  },
});