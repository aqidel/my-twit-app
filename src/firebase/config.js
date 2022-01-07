import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAqYRrFrxNxA8f-onYP0ZXNpG_ktvcUkzs',
  authDomain: 'mini-twitter-5d842.firebaseapp.com',
  projectId: 'mini-twitter-5d842',
  storageBucket: 'mini-twitter-5d842.appspot.com',
  messagingSenderId: '869889884728',
  appId: '1:869889884728:web:3249a8ffc4ce05d4dadccd',
  measurementId: 'G-727Z9GT28H'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);