<template>
  <div>
    <Navbar :cartItems="cartItems" @remove-item="removeItemFromCart" />
    <Slider />
    <section class="container mt-5">
      <ProductList :addToCart="addToCart" />
    </section>
    <section class="container mt-5">
      <ShopByPlayer />
    </section>
    <section class="container mt-5">
      <Discover />
    </section>
    <section class="container mt-5">
      <Review />
    </section>
    <SupportButton />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Slider from "./components/Slider.vue";
import ProductList from "./components/ProductList.vue";
import ShopByPlayer from "./components/ShopByPlayer.vue";
import Discover from "./components/Discover.vue";
import Review from "./components/Review.vue";
import SupportButton from "./components/SupportButton.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Slider,
    ProductList,
    ShopByPlayer,
    Discover,
    Review,
    SupportButton,
    Footer,
  },
  data() {
    return {
      cartItems: [], 
    };
  },
  methods: {
    addToCart(product) {
      this.cartItems.push(product);
    },
    removeItemFromCart(index) {
      this.cartItems.splice(index, 1); 
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
