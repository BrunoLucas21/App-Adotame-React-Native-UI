// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAoWEnHoV52dyF2yd8G6odbM65v1R8jKg",
  authDomain: "appadotameexpo.firebaseapp.com",
  projectId: "appadotameexpo",
  storageBucket: "appadotameexpo.appspot.com",
  messagingSenderId: "360903683285",
  appId: "1:360903683285:web:f7f87f64cb9b946c66065c",
  measurementId: "G-N6GCPX7C1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);