import { getDatabase, ref, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";

const db = getDatabase();
const commentsRef = ref(db, 'post-comments/' + postId);
onChildAdded(commentsRef, (data) => {
  addCommentElement(postElement, data.key, data.val().text, data.val().author);
});

onChildChanged(commentsRef, (data) => {
  setCommentValues(postElement, data.key, data.val().text, data.val().author);
});

onChildRemoved(commentsRef, (data) => {
  deleteComment(postElement, data.key);
});