import { getStorage, ref } from "firebase/storage";

// Create a root reference
const storage = getStorage();

// Create a reference to 'space.jpg'
const spaceRef = ref(storage, 'space.jpg');

// Create a reference to 'images/space.jpg'
const mountainImagesRef = ref(storage, 'images/space.jpg');

// While the file names are the same, the references point to different files
spaceRef.name === mountainImagesRef.name;           // true
spaceRef.fullPath === mountainImagesRef.fullPath;   // false 