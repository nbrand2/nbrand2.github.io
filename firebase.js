// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2xGfDrGjF-s-VU7hopuPH5OjZUrmrJM8",
  authDomain: "upload-7a6b2.firebaseapp.com",
  projectId: "upload-7a6b2",
  storageBucket: "upload-7a6b2.appspot.com",
  messagingSenderId: "855284103760",
  appId: "1:855284103760:web:5484ad8abd962e97de2f55",
  measurementId: "G-LRHQS6MB96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);

window.sessionStorage.setItem("ref",JSON.stringify(storageRef));