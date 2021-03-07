// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDl_APqIHiCke9OlRr9NAHygRtOpN1W9wA",
  authDomain: "fir-2fd1f.firebaseapp.com",
  projectId: "fir-2fd1f",
  storageBucket: "fir-2fd1f.appspot.com",
  messagingSenderId: "1010016039769",
  appId: "1:1010016039769:web:461044641f3d95d2985248",
  measurementId: "G-3FTRRZYWV4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
