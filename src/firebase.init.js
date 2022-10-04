// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0W6LTmlOlRrNcNVzos3VTdhFe9GXp5V4",
    authDomain: "fitness-trainer-ecd0a.firebaseapp.com",
    projectId: "fitness-trainer-ecd0a",
    storageBucket: "fitness-trainer-ecd0a.appspot.com",
    messagingSenderId: "209982803525",
    appId: "1:209982803525:web:a7f45ea5933b366ea79d2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

