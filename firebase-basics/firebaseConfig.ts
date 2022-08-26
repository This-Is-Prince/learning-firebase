import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIswsn7Af-ODdD3OsgqhUb_1Z7iC-DtHw",
  authDomain: "fir-frontend-36c98.firebaseapp.com",
  projectId: "fir-frontend-36c98",
  storageBucket: "fir-frontend-36c98.appspot.com",
  messagingSenderId: "65707556290",
  appId: "1:65707556290:web:81984183533e5221fbea5b",
  measurementId: "G-7ETVNBS5WF",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
