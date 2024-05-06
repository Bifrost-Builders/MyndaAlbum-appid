import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getDatabase } from "firebase/database";

const apiKey = process.env.FIREBASE_API_KEY;

const firebaseConfig = {
    apiKey:apiKey,
    authDomain: "verkefni-4-og-5-i-vefthroun.firebaseapp.com",
    projectId: "verkefni-4-og-5-i-vefthroun",
    messagingSenderId: "769414348370",
    appId: "1:769414348370:web:89ddd7a7f5f3721952698b",
    storageBucket: "verkefni-4-og-5-i-vefthroun.appspot.com",
    databaseURL: "https://verkefni-4-og-5-i-vefthroun-default-rtdb.firebaseio.com/"
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

const database = getDatabase(firebaseApp);

export { storage };

export { database };