import { getDatabase, ref, remove } from "firebase/database";

// Function to delete a user
export function deleteUser(username) {
    const userRef = ref(getDatabase(), `user/${username}`);
    remove(userRef)
      .then(() => {
        console.log("User successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing user: ", error);
      });;
}

// Function to delete an album
export function deleteAlbum(username, albumname) {
    const albumRef = ref(getDatabase(), `album/${username}/${albumname}`);
    remove(albumRef).then(() => {
        console.log("Album successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing album: ", error);
      });
}

// Function to delete an image from an album
export function deleteImage(username, albumname, imageuuid) {
    const imageRef = ref(getDatabase(), `album/${username}/${albumname}/${imageuuid}`);
    remove(imageRef)
    .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
}