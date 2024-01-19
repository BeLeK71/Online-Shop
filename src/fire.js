// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbn-1uQMzN80r91TaP0msGQSwI2Vu8kVA",
  authDomain: "shoppe-d067f.firebaseapp.com",
  projectId: "shoppe-d067f",
  storageBucket: "shoppe-d067f.appspot.com",
  messagingSenderId: "998623508759",
  appId: "1:998623508759:web:45a01ab611cea751951f52",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
