// File: firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDeOSjDs104thTXhbU5tTCAzDAiyGVVGdk",
    authDomain: "verkefni-4-og-5-i-vefthroun.firebaseapp.com",
    projectId: "verkefni-4-og-5-i-vefthroun",
    storageBucket: "verkefni-4-og-5-i-vefthroun.appspot.com",
    messagingSenderId: "769414348370",
    appId: "1:769414348370:web:89ddd7a7f5f3721952698b",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

export { storage, firebase as default };
