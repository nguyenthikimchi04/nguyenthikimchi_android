import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCigqdlAiV_cqTisXgUj2LzOAN9gfTp0SQ",
    authDomain: "android-1dcbb.firebaseapp.com",
    projectId: "android-1dcbb",
    storageBucket: "android-1dcbb.appspot.com",
    messagingSenderId: "1004740131644",
    appId: "1:1004740131644:web:7e09d05441c13de92a3c39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const database = getFirestore();

export { authentication, database };