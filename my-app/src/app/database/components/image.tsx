/*
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Image from 'next/image';
import { space } from "postcss/lib/list";
import firebaseApp from '../../firebaseConfig';

const storage = getStorage(firebaseApp);

// Points to the root reference
const storageRef = ref(storage);

// Points to 'images'
const imagesRef = ref(storageRef, 'images');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
const fileName = 'space.jpg';
const spaceRef = ref(imagesRef, fileName);

// File path is 'images/space.jpg'
const path = spaceRef.fullPath;

// File name is 'space.jpg'
const name = spaceRef.name;

// Points to 'images'
const imagesRefAgain = spaceRef.parent;

export default function Mynd() {
    return (
    <Image
    src="https://firebasestorage.googleapis.com/v0/b/verkefni-4-og-5-i-vefthroun.appspot.com/o/space.jpg?alt=media&token=f4bdea4b-7d6b-4896-b790-ad609182e939" 
    />)
}
*/