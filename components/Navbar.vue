<template>
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-light"
    :class="{ 'scrolled': isScrolled }"
  >
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="/gs-logo-white.svg" alt="Logo" class="logo me-2" />
      </a>

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

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#">MAÇ GÜNÜ</a></li>
          <li class="nav-item"><a class="nav-link" href="#">ANTRENMAN</a></li>
          <li class="nav-item"><a class="nav-link" href="#">KAMP</a></li>
          <li class="nav-item"><a class="nav-link" href="#">GİYİM</a></li>
          <li class="nav-item"><a class="nav-link" href="#">AKSESUAR</a></li>
          <li class="nav-item"><a class="nav-link" href="#">SHOP BY PLAYER</a></li>
        </ul>

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

        <div class="icons ms-3 d-flex align-items-center">
          <i class="bi bi-person me-3 dropdown-toggle" id="userMenu" data-bs-toggle="dropdown"></i>
          <ul class="dropdown-menu" aria-labelledby="userMenu">
            <li><a class="dropdown-item" href="#">Hesabım</a></li>
            <li><a class="dropdown-item" href="#">Siparişlerim</a></li>
            <li><a class="dropdown-item" href="#">Çıkış Yap</a></li>
          </ul>

          <i class="bi bi-star me-3"></i>
          <div class="cart-info" @click="toggleCartPopup">
            <i class="bi bi-cart"></i>
            <span class="cart-details">
              {{ cartItems.length }} ürün - {{ totalPrice }}₺
            </span>
          </div>
        </div>
      </div>
    </div>

    <CartPopup
      :cartVisible="cartPopupVisible"
      :cartItems="cartItems"
      @remove-item="removeItemFromCart"
    />
  </nav>
</template>

<script>
import CartPopup from "./CartPopup.vue";

export default {
  components: {
    CartPopup,
  },
  props: {
    cartItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isScrolled: false,
      cartPopupVisible: false,
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleCartPopup() {
      this.cartPopupVisible = !this.cartPopupVisible;
    },
    removeItemFromCart(index) {
      this.$emit("remove-item", index);
    },
  },
};
</script>
<style scoped>
.navbar {
  background-color: transparent;
  transition: background-color 0.3s, color 0.3s;
}
.navbar.scrolled {
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: white;
  font-weight: bold;
  transition: color 0.3s;
}
.navbar.scrolled .nav-link {
  color: black;
}
.navbar.scrolled .nav-link:hover {
  color: #c8102e;
}

.icons {
  display: flex;
  align-items: center;
}

.icons i {
  font-size: 1.5rem;
  color: white;
  transition: color 0.3s;
}
.navbar.scrolled .icons i {
  color: black;
}
.navbar.scrolled .icons i:hover {
  color: #ffc72c;
}

.cart-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.cart-details {
  margin-left: 10px;
  font-size: 0.9rem;
  color: white;
  transition: color 0.3s;
}
.navbar.scrolled .cart-details {
  color: black;
}

.logo {
  width: 150px;
  height: auto;
}
</style>
