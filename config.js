// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvox91kp-K8zWN-9_DS59vnb40QlKwQFQ",
  authDomain: "fir-auth-33e46.firebaseapp.com",
  projectId: "fir-auth-33e46",
  storageBucket: "fir-auth-33e46.appspot.com",
  messagingSenderId: "531005260263",
  appId: "1:531005260263:web:d58c00302bb273dce6fd42"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase }