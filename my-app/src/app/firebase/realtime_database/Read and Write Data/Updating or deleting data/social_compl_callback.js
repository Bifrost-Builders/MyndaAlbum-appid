import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase();
set(ref(db, 'users/' + userId), {
  username: name,
  email: email,
  profile_picture : imageUrl
})
.then(() => {
  // Data saved successfully!
})
.catch((error) => {
  // The write failed...
});