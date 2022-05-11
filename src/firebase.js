import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCySz84tI11ivfWIKq9xlbNPAjNV34dUuk",
  authDomain: "svelte-firebse-crud.firebaseapp.com",
  projectId: "svelte-firebse-crud",
  storageBucket: "svelte-firebse-crud.appspot.com",
  messagingSenderId: "560744594894",
  appId: "1:560744594894:web:550f7d206647462cc2ff9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
