import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDVorE_Ctq0xNuy5xN3cms8uqW4LB7ITv4',
  authDomain: 'news-app-aaeaf.firebaseapp.com',
  databaseURL:
    'https://news-app-aaeaf-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'news-app-aaeaf',
  storageBucket: 'news-app-aaeaf.appspot.com',
  messagingSenderId: '441645559874',
  appId: '1:441645559874:web:065cedfb33618afd023ddb',
  measurementId: 'G-9N7C85JQNY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getDatabase(app);

export {db};
