import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
const dbRef = ref(db, '/a/b/c');

onValue(dbRef, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    // ...
  });
}, {
  onlyOnce: true
});