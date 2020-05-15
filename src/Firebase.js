import firebase from "firebase/app";
import "firebase/database";
import "firebase/analytics";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACRoGUa_D3hpvjA6peNv8LFbeE-Dvq2BE",
  authDomain: "react-project-first-7050d.firebaseapp.com",
  databaseURL: "https://react-project-first-7050d.firebaseio.com",
  projectId: "react-project-first-7050d",
  storageBucket: "react-project-first-7050d.appspot.com",
  messagingSenderId: "69842466919",
  appId: "1:69842466919:web:a6a8b125e340cfe7f43cc2",
  measurementId: "G-HKTJHZYM4L",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
