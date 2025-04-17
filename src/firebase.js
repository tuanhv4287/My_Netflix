import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBs2ldJZXguB7OlnaJomFuIbxOyqOd0GKw",
  authDomain: "shopapp-fb8f7.firebaseapp.com",
  projectId: "shopapp-fb8f7",
  storageBucket: "shopapp-fb8f7.firebasestorage.app",
  messagingSenderId: "955308593507",
  appId: "1:955308593507:web:af1ffbcc760f0568338356",
  measurementId: "G-KN4ZZTK3SF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};
const logout = () => {
  signOut(auth);
};
export { auth, db, login, signup, logout };
