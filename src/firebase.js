// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyATgrQ0OeWnY4gCAuLSao0SrofIIrp-K4E",
  authDomain: "fir-289d2.firebaseapp.com",
  projectId: "fir-289d2",
  storageBucket: "fir-289d2.appspot.com",
  messagingSenderId: "421489892296",
  appId: "1:421489892296:web:94a5e342f1b217ad477efd"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export  default app