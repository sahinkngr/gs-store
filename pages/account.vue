<template>
    <div class="container mt-5">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-md-3">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active">Siparişlerim</a>
            <a href="#" class="list-group-item list-group-item-action">Favorilerim</a>
            <a href="#" class="list-group-item list-group-item-action">Kuponlarım</a>
            <a href="#" class="list-group-item list-group-item-action">Adres Bilgilerim</a>
            <a href="/profile" class="list-group-item list-group-item-action">Kişisel Bilgilerim</a>
            <a href="#" class="list-group-item list-group-item-action">Şifre Değiştirme</a>
            <button class="list-group-item list-group-item-action text-danger" @click="logout">
              Çıkış Yap
            </button>
          </div>
        </div>

        <!-- Content -->
        <div class="col-md-9">
          <h3>Siparişlerim</h3>
          <div v-if="isUserLoggedIn()">
          </div>
          <p v-else>Giriş yapmadınız. Lütfen giriş yapın ve tekrar deneyin.</p>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { useUserStore } from "@/utils/userStore";
  import { isUserLoggedIn } from "@/utils/authService";
  import { onMounted } from "vue";
  import { useRouter } from "vue-router";
  
  const userStore = useUserStore();
  const router = useRouter();
  
  // `userData` tipini doğru şekilde tanımlıyoruz.
  const labels: Record<keyof typeof userStore.userData, string> = {
    firstName: "Ad",
    lastName: "Soyad",
    email: "E-posta",
    phone: "Cep Telefonu",
    birthDate: "Doğum Tarihi",
  };
  
  onMounted(() => {
    if (!isUserLoggedIn()) {
      router.push("/login"); // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
    } else {
      userStore.fetchUserData(); // Kullanıcı giriş yapmışsa verileri al
    }
  });
  
  const saveChanges = async () => {
    try {
      await userStore.updateUserData(userStore.userData);
      alert("Bilgiler başarıyla güncellendi!");
    } catch (error) {
      alert("Bilgiler güncellenemedi. Lütfen tekrar deneyin.");
    }
  };
  
  const logout = async () => {
    try {
      await logoutUser();
      alert("Çıkış yapıldı!");
      router.push("/login"); // Çıkış yaptıktan sonra login sayfasına yönlendir
    } catch (error) {
      alert("Çıkış sırasında bir hata oluştu.");
    }
  };
  </script>
