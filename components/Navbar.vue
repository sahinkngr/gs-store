<template>
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-light"
    :class="{ 'scrolled': isScrolled }"
  >
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand d-flex align-items-center" href="/">
        <img src="/gs-logo-white.svg" alt="Logo" class="logo" />
      </a>

      <!-- Navbar Toggle Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Menu -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#">MAÇ GÜNÜ</a></li>
          <li class="nav-item"><a class="nav-link" href="#">ANTRENMAN</a></li>
          <li class="nav-item"><a class="nav-link" href="#">KAMP</a></li>
          <li class="nav-item"><a class="nav-link" href="#">GİYİM</a></li>
          <li class="nav-item"><a class="nav-link" href="#">AKSESUAR</a></li>
          <li class="nav-item"><a class="nav-link" href="#">SHOP BY PLAYER</a></li>
        </ul>

        <!-- Search Box -->
        <form class="d-flex ms-3">
          <input
            class="form-control me-2"
            type="search"
            placeholder="GS Store'da Ara"
            aria-label="Ara"
          />
          <button class="btn btn-outline-danger" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>

        <!-- Icons Section -->
        <div class="icons ms-3 d-flex align-items-center">
          <!-- User Icon -->
          <div v-if="isLoggedIn" class="dropdown">
            <i
              class="bi bi-person dropdown-toggle"
              id="userMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
            <ul class="dropdown-menu" aria-labelledby="userMenu">
              <li><a class="dropdown-item" href="/account">Hesabım</a></li>
              <li><a class="dropdown-item" href="#">Siparişlerim</a></li>
              <li>
                <button class="dropdown-item" @click="logout">Çıkış Yap</button>
              </li>
            </ul>
          </div>
          <div v-else>
            <a class="navbar-brand d-flex align-items-center" href="/login">
              <i
              class="bi bi-person"
              id="userMenu"
            ></i>
            </a>
          </div>

          <!-- Favorites Icon -->
          <i class="bi bi-star ms-3"></i>

          <!-- Cart Icon -->
          <div class="cart ms-3">
            <i class="bi bi-cart" @click="toggleCart"></i>
             <!-- Cart Button and CartView -->
            <CartView v-if="showCart" /> <!-- CartView component displayed when showCart is true -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { isUserLoggedIn, logoutUser } from "@/utils/authService";
import CartView from '@/components/CartView.vue';  // CartView bileşenini import ettik

const isScrolled = ref(false);
const isLoggedIn = ref(false);
const showCart = ref(false); // Cart görünürlüğünü kontrol etmek için ref

// Sepet görünümünü açıp kapatmak için fonksiyon
const toggleCart = () => {
  showCart.value = !showCart.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const checkLoginStatus = () => {
  isLoggedIn.value = isUserLoggedIn();
};

const logout = async () => {
  await logoutUser();
  checkLoginStatus();
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  checkLoginStatus();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Navbar */
.navbar {
  background-color: transparent;
  transition: background-color 0.3s, color 0.3s;
}
.navbar.scrolled {
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

/* Navbar Links */
.nav-link {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  text-transform: uppercase;
  padding: 0 10px;
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: #d81b26;
}
.navbar.scrolled .nav-link {
  color: black;
}
.navbar.scrolled .nav-link:hover {
  color: #c8102e;
}

/* Icons */
.icons {
  display: flex;
  align-items: center;
  gap: 15px;
}
.icons i {
  font-size: 1.5rem;
  color: black;
  transition: color 0.3s;
}
.icons i:hover {
  color: #d81b26;
}

/* Search Box */
.form-control {
  border: 1px solid #ddd;
  border-radius: 20px;
  height: 36px;
}

/* Logo */
.logo {
  width: 120px;
  height: auto;
}
</style>