import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { collection, query, getFirestore, onSnapshot } from 'firebase/firestore';
import App from './components/App.jsx';

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
const db = getFirestore();

async function xyz() {
  const queriedData = await query(collection(db, "tweets"));
  await onSnapshot(queriedData, (querySnapshot) => {
    querySnapshot.forEach((elem) => {
      console.log("Current data: ", elem.data());
    })
  });
}

//xyz()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)