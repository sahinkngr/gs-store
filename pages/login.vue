<template>
    <div class="login-page">
      <div class="login-container">
        <!-- Tabs -->
        <div class="tabs">
          <button :class="{ active: isLoginTab }" @click="isLoginTab = true">Giriş Yap</button>
          <button :class="{ active: !isLoginTab }" @click="isLoginTab = false">Üye Ol</button>
        </div>

        <!-- Login Form -->
        <div v-if="isLoginTab" class="login-form">
          <form @submit.prevent="login">
            <label for="email">E-POSTA</label>
            <input id="email" v-model="email" type="email" placeholder="E-Posta" required />

            <label for="password">ŞİFRE</label>
            <div class="password-container">
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Şifre"
                required
              />
              <button type="button" class="eye-button" @click="togglePasswordVisibility">👁️</button>
            </div>

            <button type="submit" class="login-button">GİRİŞ YAP</button>
          </form>
          <a href="#" class="forgot-password">Şifremi Unuttum</a>
        </div>

        <!-- Register Form -->
        <div v-else class="register-form">
          <form @submit.prevent="register">
            <label for="first-name">AD</label>
            <input id="first-name" v-model="firstName" type="text" placeholder="Ad" required />

            <label for="last-name">SOYAD</label>
            <input id="last-name" v-model="lastName" type="text" placeholder="Soyad" required />

            <label for="gender">CİNSİYET</label>
            <select id="gender" v-model="gender" required>
              <option value="">Seçiniz</option>
              <option value="male">Erkek</option>
              <option value="female">Kadın</option>
            </select>

            <label for="birth-date">DOĞUM TARİHİ</label>
            <input id="birth-date" v-model="birthDate" type="date" required />

            <label for="phone">CEP TELEFONU</label>
            <div class="phone-container">
              <span>+90</span>
              <input id="phone" v-model="phone" type="tel" placeholder="501 234 56 78" required />
            </div>

            <label for="register-email">E-POSTA</label>
            <input id="register-email" v-model="registerEmail" type="email" placeholder="E-Posta" required />

            <label for="register-password">ŞİFRE</label>
            <div class="password-container">
              <input id="register-password" v-model="registerPassword" :type="showPassword ? 'text' : 'password'" placeholder="Şifre" required />
              <button type="button" class="eye-button" @click="togglePasswordVisibility">👁️</button>
            </div>

            <label for="confirm-password">ŞİFRE (TEKRAR)</label>
            <div class="password-container">
              <input id="confirm-password" v-model="confirmPassword" :type="showPassword ? 'text' : 'password'" placeholder="Şifreyi Tekrar Giriniz" required />
              <button type="button" class="eye-button" @click="togglePasswordVisibility">👁️</button>
            </div>

            <div class="recaptcha">
              <input type="checkbox" id="robot-check" required />
              <label for="robot-check">Ben robot değilim</label>
            </div>

            <button type="submit" class="register-button">ÜYE OL</button>
          </form>

          <div class="terms">
            <p>Üye Ol'a basarak <a href="#">Üyelik Koşullarını</a> kabul ediyorum.</p>
            <p>
              Kampanyalardan haberdar olabilmem için kişisel verilerimin işlenmesini ve tarafıma elektronik ileti gönderilmesini kabul ediyorum.
            </p>
            <label><input type="checkbox" /> E-posta</label>
            <label><input type="checkbox" /> SMS</label>
            <label><input type="checkbox" />
              Kişisel verilerimin işlenmesine yönelik, <a href="#">Aydınlatma Metnini</a> okudum ve onaylıyorum.
            </label>
          </div>
        </div>
      </div>
    </div>
  </template>

    <script setup lang="ts">
    import { loginUser, registerUser } from "@/utils/authService";
    import { ref } from "vue";
    
    const email = ref("");
    const password = ref("");
    const firstName = ref("");
    const lastName = ref("");
    const gender = ref("");
    const birthDate = ref("");
    const phone = ref("");
    const registerEmail = ref("");
    const registerPassword = ref("");
    const confirmPassword = ref("");
    const isLoginTab = ref(true);
    const showPassword = ref(false);
    
    const login = async () => {
      try {
        await loginUser(email.value, password.value);
        console.log("Giriş başarılı");
      } catch (error: any) {
        console.error("Hata:", error.message);
        alert("Giriş başarısız: " + error.message);
      }
    };
    
    const register = async () => {
      try {
        if (registerPassword.value !== confirmPassword.value) {
          alert("Şifreler eşleşmiyor!");
          return;
        }
        await registerUser(registerEmail.value, registerPassword.value);
        console.log("Kayıt başarılı");
      } catch (error: any) {
        console.error("Hata:", error.message);
        alert("Kayıt başarısız: " + error.message);
      }
    };
    
    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };
    </script>


  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
    background-color: #f9f9f9;
    overflow-y: auto;
  }
  
  .login-container {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  .tabs {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  
  .tabs button {
    flex: 1;
    padding: 0.5rem 0;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    color: #aaa;
    border-bottom: 2px solid transparent;
  }
  
  .tabs button.active {
    color: #d81b26;
    border-bottom: 2px solid #d81b26;
  }
  
  label {
    display: block;
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #333;
  }
  
  input, select {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  .phone-container {
    display: flex;
    align-items: center;
  }
  
  .phone-container span {
    padding: 0.5rem;
    background: #eee;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
  }
  
  .phone-container input {
    border-radius: 0 4px 4px 0;
    border-left: none;
  }
  
  .password-container {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .password-container .eye-button {
    background: none;
    border: none;
    position: absolute;
    right: 10px;
    cursor: pointer;
    color: #555;
  }
  
  .login-button, .register-button {
    width: 100%;
    padding: 0.8rem;
    margin-top: 1rem;
    background: #d81b26;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .login-button:hover, .register-button:hover {
    background: #b01520;
  }
  
  .forgot-password {
    display: block;
    text-align: center;
    margin-top: 1rem;
    color: #d81b26;
    font-size: 0.9rem;
    text-decoration: none;
  }
  
  .terms {
    margin-top: 1rem;
    font-size: 0.8rem;
    color: #666;
  }
  
  .terms a {
    color: #d81b26;
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    .login-container {
      padding: 1rem;
    }
  
    .tabs button {
      font-size: 0.9rem;
    }
  
    input, select {
      font-size: 0.85rem;
    }
  
    .login-button, .register-button {
      font-size: 0.9rem;
      padding: 0.7rem;
    }
  }
  </style>