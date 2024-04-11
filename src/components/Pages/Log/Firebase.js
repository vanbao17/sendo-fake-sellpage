import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {getAuth} from 'firebase/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAZwMgq6cTuqeHSTt1MSB8Vatv_eALiyIA',
  authDomain: 'signinsendophone.firebaseapp.com',
  projectId: 'signinsendophone',
  storageBucket: 'signinsendophone.appspot.com',
  messagingSenderId: '119824169041',
  appId: '1:119824169041:web:1fa2b9b18c05123a10a070',
  measurementId: 'G-909EMJEPGW',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);

export default {db, auth};
