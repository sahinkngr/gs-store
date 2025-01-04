<template>
  <div class="product-list-container">
    <h2 class="text-center mb-4">YENİ ÜRÜNLERİ KEŞFET</h2>
    <div class="product-list">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-item"
        @click="openPopup(product)"
      >
        <div class="image-container">
          <img :src="product.image" :alt="product.name" />
        </div>
        <h4>{{ product.name }}</h4>
        <p>{{ product.price.toFixed(2) }}₺</p>
      </div>
    </div>

    <div v-if="popupVisible" class="popup-overlay" @click.self="closePopup">
      <div class="popup-content">
        <button class="close-btn" @click="closePopup">X</button>
        <div class="popup-image">
          <img :src="selectedProduct.image" :alt="selectedProduct.name" />
        </div>
        <div class="popup-details">
          <h4>{{ selectedProduct.name }}</h4>
          <p>{{ selectedProduct.price.toFixed(2) }}₺</p>
          <h5>BEDEN:</h5>
          <div class="size-options">
            <button
              v-for="size in selectedProduct.sizes"
              :key="size"
              :class="{ active: selectedSize === size }"
              @click="selectSize(size)"
            >
              {{ size }}
            </button>
          </div>
          <button
            class="add-to-cart-btn"
            :disabled="!selectedSize"
            @click="handleAddToCart"
          >
            SEPETE EKLE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addToCart: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      popupVisible: false,
      selectedProduct: null,
      selectedSize: null,
      products: [
        {
          name: "Galatasaray T-Shirt",
          price: 100,
          image: "/1.webp",
          sizes: ["S", "M", "L", "XL"],
        },
        {
          name: "Galatasaray Sweatshirt",
          price: 200,
          image: "/2.webp",
          sizes: ["M", "L", "XL"],
        },
        {
          name: "Galatasaray Sweatshirt",
          price: 270,
          image: "/3.webp",
          sizes: ["M", "L", "XL"],
        },
        {
          name: "Galatasaray Sweatshirt",
          price: 232,
          image: "/4.webp",
          sizes: ["M", "L", "XL"],
        },
        {
          name: "Galatasaray Sweatshirt",
          price: 1203,
          image: "/5.webp",
          sizes: ["M", "L", "XL"],
        },
      ],
    };
  },
  methods: {
    openPopup(product) {
      this.selectedProduct = product;
      this.popupVisible = true;
      this.selectedSize = null;
    },
    closePopup() {
      this.popupVisible = false;
    },
    selectSize(size) {
      this.selectedSize = size;
    },
    handleAddToCart() {
      if (this.selectedProduct && this.selectedSize) {
        const productWithSize = {
          ...this.selectedProduct,
          size: this.selectedSize,
        };
        this.addToCart(productWithSize);
        this.closePopup();
      }
    },
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.product-item {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: calc(25% - 20px);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
.product-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.popup-image img {
  width: 100%;
  border-radius: 8px;
}

.size-options {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.size-options button {
  padding: 8px 16px;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.size-options button.active {
  background-color: #c8102e;
  color: white;
}

.add-to-cart-btn {
  background-color: #c8102e;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
