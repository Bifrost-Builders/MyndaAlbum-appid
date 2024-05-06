import { getDatabase, increment, ref, update } from "firebase/database";
function addStar(uid, key) {
    
    const dbRef = ref(getDatabase());
  
    const updates = {};
    updates[`posts/${key}/stars/${uid}`] = true;
    updates[`posts/${key}/starCount`] = increment(1);
    updates[`user-posts/${key}/stars/${uid}`] = true;
    updates[`user-posts/${key}/starCount`] = increment(1);
    update(dbRef, updates);
  }