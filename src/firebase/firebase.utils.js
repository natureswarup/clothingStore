// importing firebase is importing the base items into our project
import firebase from "firebase/app";
//here we are importing the specific things we need from firebase app
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBaU5diboVTpZeKyqGbshiWcYFxS9kXtp8",
  authDomain: "clothing-db-bc87c.firebaseapp.com",
  projectId: "clothing-db-bc87c",
  storageBucket: "clothing-db-bc87c.appspot.com",
  messagingSenderId: "347521933658",
  appId: "1:347521933658:web:4b407c909b71d18b5dd363",
  measurementId: "G-VY7H7N7QKX",
};

//see firebase docs
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
