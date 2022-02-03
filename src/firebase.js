import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const firebaseApp = {
  apiKey: "AIzaSyD2dmU7AQBxIB3ILdZRsPzQeCv4mhIfvYo",
  authDomain: "ping-pong-e98ee.firebaseapp.com",
  projectId: "ping-pong-e98ee",
  storageBucket: "ping-pong-e98ee.appspot.com",
  messagingSenderId: "1010918730396",
  appId: "1:1010918730396:web:5bd267c5ab3cd247321b59",
};

const app = initializeApp(firebaseApp);
export const auth = getAuth(app);
export const user = auth.currentUser;
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      localStorage.setItem("email", email);
      createUser(name, email);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createUser = async (username, email) => {
  const ListeUsersCollectionRef = collection(db, "users");
  const userExist = query(ListeUsersCollectionRef, where("email", "==", email));
  const data = await getDocs(userExist);
  if (data.docs.length === 0) {
    await addDoc(ListeUsersCollectionRef, {
      username: username,
      email: email,
      status: "A vérifier",
      role: "Joueur",
    });
  }
};

export const db = getFirestore();
