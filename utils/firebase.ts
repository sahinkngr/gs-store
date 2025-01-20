import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Firebase Authentication için ekleme
import { getDatabase } from 'firebase/database'; 

// Firebase config bilgileri
const firebaseConfig = {
    apiKey: "AIzaSyCBJ9deJX2veJsGOwoLUEev3IPZE7bzr10",
    authDomain: "gs-store3.firebaseapp.com",
    databaseURL: "https://gs-store3-default-rtdb.firebaseio.com",
    projectId: "gs-store3",
    storageBucket: "gs-store3.firebasestorage.app",
    messagingSenderId: "361406877085",
    appId: "1:361406877085:web:772495b5329b11df75f374"
};

// Firebase uygulamasını başlatma (app zaten varsa, yeniden başlatma)
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firestore, Auth ve Realtime Database servislerini başlat
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const rtdb = getDatabase(firebaseApp);

export { db, auth, rtdb };