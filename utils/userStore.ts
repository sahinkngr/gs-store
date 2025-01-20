import { defineStore } from "pinia";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/utils/firebase"; // Firebase config dosyasına göre

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userData: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthDate: "",
    },
    loading: false,
  }),
  actions: {
    async fetchUserData() {
      this.loading = true;
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          // Firebase Firestore'dan verileri al
          const docRef = doc(db, "users", user.uid); // 'users' koleksiyonunda, user.uid ile dokümanı al
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            // Veriyi al ve Pinia store'a kaydet
            this.userData = docSnap.data() as typeof this.userData;
          } else {
            console.error("Firestore'dan kullanıcı verisi alınamadı.");
          }
        } else {
          // Kullanıcı giriş yapmamış, login sayfasına yönlendir
          console.error("Kullanıcı oturumu açık değil.");
          this.loading = false; // Yükleme durumunu sonlandır
        }
      } catch (error) {
        console.error("Kullanıcı verileri alınamadı:", error);
      } finally {
        this.loading = false;
      }
    },

    async updateUserData(newData: typeof this.userData) {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          // Firebase Firestore'a verileri güncelle
          const userRef = doc(db, "users", user.uid);
          await setDoc(userRef, newData, { merge: true });
          this.userData = newData; // Verileri güncelle
        } else {
          console.error("Kullanıcı oturumu açık değil.");
        }
      } catch (error) {
        console.error("Kullanıcı verileri güncellenemedi:", error);
      }
    },
  },
});
