import { getStorage, ref, updateMetadata } from "firebase/storage";

const storage = getStorage();
const forestRef = ref(storage, 'images/forest.jpg');

// Create file metadata with property to delete
const deleteMetadata = {
  contentType: null
};

// Delete the metadata property
updateMetadata(forestRef, deleteMetadata)
  .then((metadata) => {
    // metadata.contentType should be null
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });