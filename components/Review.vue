<template>
  <div class="container py-5">
    <div class="row g-4">
      <!-- Kartlar -->
      <div class="col-lg-3 col-md-6" v-for="item in cards" :key="item.id">
        <div class="card border-0 shadow-sm rounded-3">
          <!-- Görsel -->
          <img :src="item.image" class="card-img-top rounded-top" alt="..." />
          <!-- İçerik -->
          <div class="card-body text-center">
            <h5 class="card-title fw-bold">{{ item.title }}</h5>
            <p class="card-text text-muted">{{ item.description }}</p>
            <a href="#" class="text-decoration-none fw-bold">
              → İncele
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          image: "1-t.webp",
          title: "AVRUPA LİGİ",
          description: "Koleksiyonu Keşfet",
        },
        {
          id: 2,
          image: "2-t.webp",
          title: "ŞAMPİYON'24",
          description: "24. Şampiyonluk Ürünlerini İncele",
        },
        {
          id: 3,
          image: "3-t.webp",
          title: "HEDİYE KARTI",
          description: "Gsstore.org'da geçerli hediye kartı",
        },
        {
          id: 4,
          image: "4-t.webp",
          title: "PUMA",
          description: "Puma Koleksiyonu",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  transition: transform 0.3s ease-in-out;
}
.card:hover {
  transform: scale(1.05);
}
</style>
