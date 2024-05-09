import { getDatabase, ref, remove } from "firebase/database";

// Function to delete a user
export function deleteUser(username) {
    const userRef = ref(getDatabase(), `user/${username}`);
    remove(userRef);
}

// Function to delete an album
export function deleteAlbum(username, albumname) {
    const albumRef = ref(getDatabase(), `album/${username}/${albumname}`);
    remove(albumRef);
}

// Function to delete an image from an album
export function deleteImage(username, albumname, imageuuid) {
    const imageRef = ref(getDatabase(), `album/${username}/${albumname}/${imageuuid}`);
    remove(imageRef);
}

// Usage 
/*
deleteUser('a_username');
deleteAlbum('a_username', 'an_album_name');
deleteImage('a_username', 'an_album_name', 'an_image_uuid');
*/