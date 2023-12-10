
import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0hYxFqEfJflyZ1HcOkXiqEh5KO2xaUHQ",
  authDomain: "gerenciadortarefas-f83fc.firebaseapp.com",
  projectId: "gerenciadortarefas-f83fc",
  storageBucket: "gerenciadortarefas-f83fc.appspot.com",
  messagingSenderId: "10333732354",
  appId: "1:10333732354:web:ff1d150ce9742ddca5311b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export{ db }