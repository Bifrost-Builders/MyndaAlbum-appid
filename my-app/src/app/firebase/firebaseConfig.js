const apiKey = process.env.FIREBASE_API_KEY;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey:apiKey,
    authDomain: "verkefni-4-og-5-i-vefthroun.firebaseapp.com",
    projectId: "verkefni-4-og-5-i-vefthroun",
    messagingSenderId: "769414348370",
    appId: "1:769414348370:web:89ddd7a7f5f3721952698b",
    databaseURL: "https://verkefni-4-og-5-i-vefthroun-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);