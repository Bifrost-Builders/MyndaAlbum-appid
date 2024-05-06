import { getDatabase, ref, query, orderByChild } from "firebase/database";

const db = getDatabase();
const mostViewedPosts = query(ref(db, 'posts'), orderByChild('metrics/views'));