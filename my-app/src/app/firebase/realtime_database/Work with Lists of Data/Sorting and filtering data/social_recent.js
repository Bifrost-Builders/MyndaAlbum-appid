import { getDatabase, ref, query, limitToLast } from "firebase/database";

const db = getDatabase();
const recentPostsRef = query(ref(db, 'posts'), limitToLast(100));