import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAswfBQJkbEnz2rKbZe2yuwgxgeG6vrzKI",
  authDomain: "react-native-ec666.firebaseapp.com",
  projectId: "react-native-ec666",
  storageBucket: "react-native-ec666.appspot.com",
  messagingSenderId: "851884238962",
  appId: "1:851884238962:web:c11c48992a51d9b7313aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
