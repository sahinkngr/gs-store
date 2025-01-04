<template>
  <div v-if="cartVisible" class="cart-popup">
    <div class="cart-popup-header">
      <h5>SEPETİM</h5>
      <span>{{ cartItems.length }} Ürün</span>
    </div>
    <ul class="cart-items">
      <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <img :src="item.image" alt="Product Image" class="cart-item-image" />
        <div class="cart-item-details">
          <span class="cart-item-name">{{ item.name }}</span>
          <span class="cart-item-size">Beden: {{ item.size }}</span>
          <span class="cart-item-price">{{ item.price.toFixed(2) }}₺</span>
        </div>
        <button @click="removeFromCart(index)" class="remove-item">X</button>
      </li>
    </ul>
    <div class="cart-total">
      <span>TOPLAM TUTAR</span>
      <strong>{{ totalPrice.toFixed(2) }}₺</strong>
    </div>
    <button class="checkout-btn">ALIŞVERİŞİ TAMAMLA</button>
  </div>
</template>

<script>
export default {
  props: {
    cartVisible: {
      type: Boolean,
      required: true,
    },
    cartItems: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0);
    },
  },
  methods: {
    removeFromCart(index) {
      this.$emit("remove-item", index); 
    },
  },
};
</script>

<style scoped>
.cart-popup {
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  width: 300px;
  border-radius: 10px;
  z-index: 1000;
}

.cart-popup-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.cart-item-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 5px;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: bold;
}

.checkout-btn {
  width: 100%;
  background-color: #c8102e;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>