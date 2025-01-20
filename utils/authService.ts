import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { useUserStore } from "@/utils/userStore"; // useUserStore import edildi

// Kullanıcı giriş fonksiyonu
export const loginUser = async (email: string, password: string): Promise<void> => {
  const userStore = useUserStore(); // Pinia store'dan userStore'u kullanıyoruz
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();

    // Cookie ayarı (Tarayıcıda kontrol edebilirsiniz)
    document.cookie = `authToken=${token}; path=/; max-age=3600; secure; SameSite=Strict`;
    console.log("Giriş başarılı ve cookie yazıldı.");

    // Giriş sonrası kullanıcı verilerini çek
    await userStore.fetchUserData();
  } catch (error: any) {
    console.error("Giriş başarısız:", error.message);
    throw new Error(error.message);
  }
};

// Kullanıcı kayıt fonksiyonu
export const registerUser = async (
  email: string,
  password: string,
  userData: { firstName: string; lastName: string; phone: string; birthDate: string }
): Promise<void> => {
  const userStore = useUserStore(); // Pinia store'dan userStore'u kullanıyoruz
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Verilerin doğru şekilde alındığından emin olun
    if (!userData.firstName || !userData.lastName || !userData.phone || !userData.birthDate) {
      throw new Error("Gerekli alanlar eksik!");
    }

    // Firebase Firestore'a kullanıcı verilerini kaydediyoruz
    const userRef = doc(db, "users", user.uid); // 'users' koleksiyonunda, user.uid ile doküman referansı
    await setDoc(userRef, {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: user.email,
      phone: userData.phone,
      birthDate: userData.birthDate,
    });

    console.log("Kayıt başarılı ve Firestore'a veri eklendi.");

    // Kayıt sonrası kullanıcı verilerini çek
    await userStore.fetchUserData();
  } catch (error: any) {
    console.error("Kayıt başarısız:", error.message);
    throw new Error(error.message);
  }
};

// Çıkış yapma fonksiyonu
export const logoutUser = async (): Promise<void> => {
  const userStore = useUserStore(); // Pinia store'dan userStore'u kullanıyoruz
  try {
    await signOut(auth);
    console.log("Çıkış başarılı");

    // Çerezi temizleyin
    document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    // Çıkış sonrası verileri sıfırlama
    userStore.userData = { firstName: "", lastName: "", email: "", phone: "", birthDate: "" };
  } catch (error: any) {
    console.error("Çıkış başarısız:", error.message);
    throw new Error(error.message);
  }
};

export const isUserLoggedIn = (): boolean => {
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [key, value] = cookie.split("=");
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  // authToken var mı kontrol et
  return Boolean(cookies.authToken);
};