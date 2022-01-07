import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, addDoc, setDoc, getDocs } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAqYRrFrxNxA8f-onYP0ZXNpG_ktvcUkzs',
  authDomain: 'mini-twitter-5d842.firebaseapp.com',
  projectId: 'mini-twitter-5d842'
});

const db = getFirestore();

export default function createTwit(text, user) {
  const ref = collection(db, 'tweets');
  addDoc(ref, {
    text: text,
    user: user
  });
}