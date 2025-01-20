import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,  // Kullanıcı giriş durumu
    userData: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthDate: "",
    },  // Kullanıcı verileri
  }),
  actions: {
    // Giriş işlemi yapıldığında
    login(userData: { firstName: string; lastName: string; email: string; phone: string; birthDate: string }) {
      this.isLoggedIn = true;
      this.userData = userData;  // Kullanıcı verilerini store'a kaydediyoruz
    },
    // Çıkış işlemi yapıldığında
    logout() {
      this.isLoggedIn = false;
      this.userData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        birthDate: "",
      };  // Kullanıcı verilerini sıfırlıyoruz
    },
    // Kullanıcı verilerini güncelleme
    updateUserData(newUserData: { firstName: string; lastName: string; email: string; phone: string; birthDate: string }) {
      this.userData = newUserData;
    },
  },
});