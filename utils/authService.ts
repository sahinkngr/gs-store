import { auth } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// Kullanıcı giriş fonksiyonu
export const loginUser = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Giriş başarılı:", userCredential.user);

    // İsteğe bağlı: Kullanıcı token'ını saklayın (cookie veya localStorage)
    const token = await userCredential.user.getIdToken();
    document.cookie = `authToken=${token}; path=/; secure; httpOnly`;
  } catch (error: any) {
    console.error("Giriş başarısız:", error.message);
    throw new Error(error.message);
  }
};

// Kullanıcı kayıt fonksiyonu
export const registerUser = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Kayıt başarılı:", userCredential.user);

    // İsteğe bağlı: Kullanıcı token'ını saklayın
    const token = await userCredential.user.getIdToken();
    document.cookie = `authToken=${token}; path=/; secure; httpOnly`;
  } catch (error: any) {
    console.error("Kayıt başarısız:", error.message);
    throw new Error(error.message);
  }
};

// Çıkış yapma fonksiyonu
export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("Çıkış başarılı");

    // Çerezi temizleyin
    document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  } catch (error: any) {
    console.error("Çıkış başarısız:", error.message);
    throw new Error(error.message);
  }
};
