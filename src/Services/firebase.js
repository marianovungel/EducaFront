import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCsB5iS6NM_xjAexe0voh8gBqIJskvR-Ro",
  authDomain: "neueduuca.firebaseapp.com",
  projectId: "neueduuca",
  storageBucket: "neueduuca.appspot.com",
  messagingSenderId: "165585347144",
  appId: "1:165585347144:web:233b5b85ec9e54eb552e7d"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebase = getStorage(app)
