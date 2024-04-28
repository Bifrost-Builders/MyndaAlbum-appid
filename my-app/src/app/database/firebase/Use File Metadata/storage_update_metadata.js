import { getStorage, ref, updateMetadata } from "firebase/storage";

// Create a reference to the file whose metadata we want to change
const storage = getStorage();
const forestRef = ref(storage, 'images/forest.jpg');

// Create file metadata to update
const newMetadata = {
  cacheControl: 'public,max-age=300',
  contentType: 'image/jpeg'
};

// Update metadata properties
updateMetadata(forestRef, newMetadata)
  .then((metadata) => {
    // Updated metadata for 'images/forest.jpg' is returned in the Promise
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });