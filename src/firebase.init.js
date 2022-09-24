// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByUuZTySKIwtpNihyA0_NiFVMvOlDNT4I",
    authDomain: "fitness-trainer-54657.firebaseapp.com",
    projectId: "fitness-trainer-54657",
    storageBucket: "fitness-trainer-54657.appspot.com",
    messagingSenderId: "393948794008",
    appId: "1:393948794008:web:ef2f75bac768a0e2c854ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;