<template>
    <div class="container mt-5">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-md-3">
          <div class="list-group">
            <a href="/account" class="list-group-item list-group-item-action">Siparişlerim</a>
            <a href="#" class="list-group-item list-group-item-action">Favorilerim</a>
            <a href="#" class="list-group-item list-group-item-action">Kuponlarım</a>
            <a href="#" class="list-group-item list-group-item-action">Adres Bilgilerim</a>
            <a href="/profile" class="list-group-item list-group-item-action active">Kişisel Bilgilerim</a>
            <a href="#" class="list-group-item list-group-item-action">Şifre Değiştirme</a>
            <button class="list-group-item list-group-item-action text-danger" @click="logout">
              Çıkış Yap
            </button>
          </div>
        </div>

        <!-- Content -->
        <div class="col-md-9">
          <h3>Kişisel Bilgilerim</h3>

          <!-- Yükleniyor durumu -->
          <div v-if="userStore.loading">
            <p>Yükleniyor...</p>
          </div>

          <!-- Veriler yüklendiyse ve kullanıcı giriş yapmışsa -->
          <div v-if="!userStore.loading && isUserLoggedIn">
            <form @submit.prevent="saveChanges">
              <div class="mb-3" v-for="(label, key) in labels" :key="key">
                <label :for="key" class="form-label">{{ label }}</label>
                <input
                  :type="key === 'birthDate' ? 'date' : 'text'"
                  :id="key"
                  v-model="userStore.userData[key]"
                  class="form-control"
                  :readonly="true"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">Kaydet</button>
            </form>
          </div>
          <p v-else>Giriş yapmadınız. Lütfen giriş yapın ve tekrar deneyin.</p>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { useUserStore } from "@/utils/userStore"; 
  import { onMounted } from "vue"; 
  import { useRouter } from "vue-router"; 
  
  const userStore = useUserStore(); 
  const router = useRouter();
  
  const labels: Record<string, string> = {
    firstName: "Ad",
    lastName: "Soyad",
    email: "E-posta",
    phone: "Cep Telefonu",
    birthDate: "Doğum Tarihi",
  };
  
  // Sayfa yüklendiğinde kullanıcıyı kontrol et ve verileri al
  onMounted(() => {
    if (!isUserLoggedIn) {
      router.push("/login"); // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
    } else {
      userStore.fetchUserData(); // Kullanıcı giriş yapmışsa verileri al
    }
  });
  
  // Kullanıcı bilgilerini kaydet
  const saveChanges = async () => {
    try {
      await userStore.updateUserData(userStore.userData); // Veriyi Firebase'e kaydet
      alert("Bilgiler başarıyla güncellendi!");
    } catch (error) {
      alert("Bilgiler güncellenemedi. Lütfen tekrar deneyin.");
    }
  };
  
  // Çıkış yap
  const logout = async () => {
    try {
      await logoutUser(); // Çıkış fonksiyonunu doğru çağırıyoruz
      alert("Çıkış yapıldı!");
      router.push("/login"); // Çıkış yaptıktan sonra login sayfasına yönlendir
    } catch (error) {
      alert("Çıkış sırasında bir hata oluştu.");
    }
  };
  </script>