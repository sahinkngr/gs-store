<template>
  <div class="cart-popup">
    <h3>Sepetim</h3>
    <div v-if="cartItems.length > 0">
      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <img :src="item.image" alt="product image" class="cart-item-image" />
        <div>
          <h5>{{ item.name }}</h5>
          <p>{{ item.size }}</p>
          <p>{{ item.price.toFixed(2) }}₺</p>
        </div>
        <button @click="removeFromCart(index)">Kaldır</button>
      </div>

      <div class="total-price">
        <h4>Toplam Tutar: {{ totalPrice.toFixed(2) }}₺</h4>
      </div>

      <button class="checkout-btn" @click="checkout">Satın Al</button>
    </div>
    <div v-else>
      <p>Sepetinizde ürün bulunmamaktadır.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "@/stores/cartStore"; // Pinia store'dan cart store'u alıyoruz
import { useRouter } from "vue-router";

  const router = useRouter();
// Cart store'u kullanıyoruz
const cartStore = useCartStore();

// Sepet ürünlerini alıyoruz
const cartItems = computed(() => cartStore.cartItems);

// Toplam fiyatı hesaplıyoruz
const totalPrice = computed(() => cartStore.totalPrice);

// Sepet elemanını kaldırma fonksiyonu
const removeFromCart = (index: number) => {
  cartStore.removeFromCart(index);
};

// Satın alma fonksiyonu
const checkout = () => {
  router.push("/account");
};
</script>

<style scoped>
.cart-popup {
  position: fixed;
  top: 70px;
  right: 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 400px;
  overflow-y: auto;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.cart-item-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.total-price {
  font-size: 18px;
  margin-top: 20px;
}

.checkout-btn {
  background-color: #d81b26;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.checkout-btn:hover {
  background-color: #c8102e;
}
</style>
