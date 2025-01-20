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
          <div v-if="cartStore.cartItems.length > 0">
            <div v-for="(item, index) in cartStore.cartItems" :key="index" class="cart-item">
              <div class="cart-item-info">
                <img :src="item.image" alt="product image" class="cart-item-image" />
                <div>
                  <h5>{{ item.name }}</h5>
                  <p>{{ item.size }}</p>
                  <p>{{ item.price.toFixed(2) }}₺</p>
                </div>
              </div>
              <button class="remove-btn" @click="removeFromCart(index)">Kaldır</button>
            </div>

            <div class="total-price">
              <h4>Toplam Tutar: {{ cartStore.totalPrice.toFixed(2) }}₺</h4>
            </div>

            <button class="checkout-btn" @click="checkout">Satın Al</button>
          </div>
          <div v-else>
            <p>Sepetinizde ürün bulunmamaktadır.</p>
          </div>
        </div>
        <p v-else>Giriş yapmadınız. Lütfen giriş yapın ve tekrar deneyin.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cartStore";
import { isUserLoggedIn } from "@/utils/authService";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const router = useRouter();

// Sepetten ürün kaldırma fonksiyonu
const removeFromCart = (index: number) => {
  cartStore.removeFromCart(index);
};

// Satın alma işlemi
const checkout = () => {
  // Burada ödeme işlemini başlatabilirsiniz (örneğin, bir ödeme sağlayıcı API'si kullanarak)
  cartStore.clearCart(); // Sepeti temizle
  alert("Satın alma işlemi başarılı! Teşekkürler.");
  router.push("/thank-you"); // Kullanıcıyı teşekkür sayfasına yönlendir
};

// Çıkış yapma fonksiyonu
const logout = async () => {
  try {
    // Çıkış işlemini yap
    // authService.logout() gibi bir fonksiyon ekleyebilirsiniz
    alert("Çıkış yapıldı!");
    router.push("/login"); // Login sayfasına yönlendirme
  } catch (error) {
    alert("Çıkış sırasında bir hata oluştu.");
  }
};

// Sayfa yüklendiğinde sepete ait verileri yükle
onMounted(() => {
  if (isUserLoggedIn()) {
    cartStore.loadCartFromDatabase(); // Veritabanından sepetteki ürünleri al
  }
});
</script>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.cart-item-info {
  display: flex;
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 10px;
}

.remove-btn {
  background-color: #d81b26;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.total-price {
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
}

.checkout-btn {
  background-color: #c8102e;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}
</style>