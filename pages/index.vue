<template>
    <Slider />
    <ProductList />
    <div class="home">
      <section class="hero">
        <h1>GS Store</h1>
        <p>En kaliteli ürünlerle Galatasaray'a destek olun!</p>
        <button class="btn btn-primary" @click="navigateToShop">Alışverişe Başla</button>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from "vue-router";
  
  // Router ile shop sayfasına yönlendirme
  const router = useRouter();
  const navigateToShop = () => {
    router.push("/shop"); // "/shop" rotasına yönlendir
  };
  </script>
  
  <style scoped>
  /* Ana Sayfa Tasarımı */
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f4f4;
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  .hero h1 {
    font-size: 2.5rem;
    color: #d81b26;
    margin-bottom: 10px;
  }
  .hero p {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 20px;
  }
  .hero .btn {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #d81b26;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .hero .btn:hover {
    background-color: #b01520;
  }
  </style>
  