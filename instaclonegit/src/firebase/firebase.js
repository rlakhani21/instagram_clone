// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCdW-5QA8NJ7var8aotBPkyGf4Q0Uu8ng0",
	authDomain: "idea-social-club.firebaseapp.com",
	projectId: "idea-social-club",
	storageBucket: "idea-social-club.appspot.com",
	messagingSenderId: "901628806603",
	appId: "1:901628806603:web:3a7e168795f3b2ffc4a24e",
	measurementId: "G-B2QCMGH4GQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };