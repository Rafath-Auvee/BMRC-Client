// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBztAjTPAaQS80NWChSsRAF-MXhnFDNShI",
  authDomain: "bmrc-c4f79.firebaseapp.com",
  projectId: "bmrc-c4f79",
  storageBucket: "bmrc-c4f79.appspot.com",
  messagingSenderId: "642357723694",
  appId: "1:642357723694:web:b362e3efec8c2abfb295bf",
  measurementId: "G-7JSZT36GNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);