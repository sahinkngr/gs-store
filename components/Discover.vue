<template>
  <div class="container py-5">
    <div class="row g-3">
      <!-- Sol Kart -->
      <div class="col-md-6">
        <div class="card bg-dark text-white rounded-3 overflow-hidden">
          <img src="/2.webp" class="card-img" alt="Legends" />
          <div class="card-img-overlay d-flex flex-column justify-content-between">
            <h1 class="card-title text-uppercase" style="font-family: serif; font-size: 2.5rem;">
              Legends
            </h1>
            <div class="text-end">
              <button class="btn btn-warning text-uppercase fw-bold px-4 py-2">
                Keşfet
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Sağ Kart -->
      <div class="col-md-6">
        <div class="card bg-dark text-white rounded-3 overflow-hidden">
          <img src="/1.webp" class="card-img" alt="Design FC" />
          <div class="card-img-overlay d-flex flex-column justify-content-between">
            <div class="text-end">
              <button class="btn btn-warning text-uppercase fw-bold px-4 py-2">
                Keşfet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border: none;
  height: 100%;
}
.card-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.card-img-overlay {
  background: rgba(0, 0, 0, 0.5); /* Hafif karartma efekti */
  padding: 1.5rem;
}
</style>
