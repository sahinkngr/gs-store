<template>
    <div id="video-carousel" class="container">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <video class="d-block w-100" autoplay muted loop>
              <source src="/video1.mp4" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          </div>
          <div class="carousel-item">
            <video class="d-block w-100" autoplay muted loop>
              <source src="/video2.mp4" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          </div>
          <div class="carousel-item">
            <video class="d-block w-100" autoplay muted loop>
              <source src="/video3.mp4" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "VideoCarousel",
  };
  </script>
  
  <style scoped>
  #video-carousel {
    margin: 0;
    padding: 0;
    max-width: 100%;
  }
  
  .carousel-indicators button {
    background-color: #d50000;
  }
  
  .carousel-indicators .active {
    background-color: #fbc02d;
  }
  
  video {
    object-fit: cover;
    width: 100%;
  }
  </style>
  