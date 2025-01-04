<template>
    <div class="shop-by-player">
      <h2 class="text-center mb-4">SHOP BY PLAYER</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="player in players" :key="player.name">
          <div class="card h-100">
            <!-- Daire şeklinde görsel ve hover'da Galatasaray gradient arka planı -->
            <div class="image-container">
              <img :src="player.image" class="card-img-top rounded-circle" :alt="player.name">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ player.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ShopByPlayer',
    data() {
      return {
        players: [
          { name: 'Fernando Muslera', image: '/muslera.webp' },
          { name: 'Ismail Jakobs', image: '/ismail.webp' },
          { name: 'Davinson Sanchez', image: '/davinson.webp' },
          { name: 'Kaan Ayhan', image: '/kaan.webp' },
          { name: 'Elias Jelert', image: '/elias.webp' },
          { name: 'Victor Enok Nelsson', image: '/victor.webp' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .shop-by-player {
    padding: 2rem;
  }
  
  .card {
    border: none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  
  .image-container {
    width: 150px;
    height: 150px;
    background-color: #ffff; /* Varsayılan kırmızı arka plan */
    border-radius: 50%; /* Daire şekli için bu özellik eklendi */
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease; /* Geçiş efektini ekledik */
  }
  
  .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%; /* Görseli daireye yerleştirme */
  }
  
  .card-title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  /* Hover durumunda Galatasaray gradient rengi ekleniyor */
  .image-container:hover {
    background: linear-gradient(135deg, #e4002b, #f7d100); /* Galatasaray'ın kırmızı ve sarı renkleri */
  }
  </style>
  