import { getStorage, ref, getMetadata } from "firebase/storage";

// Create a reference to the file whose metadata we want to retrieve
const storage = getStorage();
const forestRef = ref(storage, 'images/forest.jpg');

// Get metadata properties
getMetadata(forestRef)
  .then((metadata) => {
    // Metadata now contains the metadata for 'images/forest.jpg'
  })
  .catch((error) => {
    // Uh-oh, an error occurred!
  });