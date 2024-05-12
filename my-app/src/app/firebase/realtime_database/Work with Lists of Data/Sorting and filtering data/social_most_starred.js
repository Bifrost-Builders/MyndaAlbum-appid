import { getDatabase, ref, query, orderByChild } from "firebase/database";
import { getAuth } from "firebase/auth";

const db = getDatabase();
const auth = getAuth();

const myUserId = auth.currentUser.uid;
const topUserPostsRef = query(ref(db, 'user-posts/' + myUserId), orderByChild('starCount'));