import { getDatabase, ref, push, set } from "firebase/database";

// Create a new post reference with an auto-generated id
const db = getDatabase();
const postListRef = ref(db, 'posts');
const newPostRef = push(postListRef);
set(newPostRef, {
    // ...
});