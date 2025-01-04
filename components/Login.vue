<template>
  <div class="container mt-5" style="max-width: 400px;">
    <!-- Tab Navigation -->
    <ul class="nav nav-tabs mb-3">
      <li class="nav-item">
        <button
          class="nav-link"
          :class="{ active: activeTab === 'login' }"
          @click="setActiveTab('login')"
        >
          Giriş Yap
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link"
          :class="{ active: activeTab === 'signup' }"
          @click="setActiveTab('signup')"
        >
          Üye Ol
        </button>
      </li>
    </ul>

    <!-- Form -->
    <form v-if="activeTab === 'login'">
      <div class="mb-3">
        <label for="email" class="form-label">E-POSTA</label>
        <input type="email" id="email" class="form-control" placeholder="E-posta adresinizi giriniz" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">ŞİFRE</label>
        <div class="input-group">
          <input
            :type="passwordVisible ? 'text' : 'password'"
            id="password"
            class="form-control"
            placeholder="Şifrenizi giriniz"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="togglePasswordVisibility"
          >
            <i :class="passwordVisible ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
          </button>
        </div>
      </div>
      <button type="submit" class="btn btn-danger w-100">GİRİŞ YAP</button>
      <div class="text-center mt-3">
        <a href="#" class="text-decoration-none">Şifremi Unuttum</a>
      </div>
    </form>

    <!-- Signup Form Placeholder -->
    <div v-else>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'login',
      passwordVisible: false,
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
</style>
