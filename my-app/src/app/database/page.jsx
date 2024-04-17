import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import Link from 'next/link'

const firebaseConfig = {
  apiKey: "AIzaSyDeOSjDs104thTXhbU5tTCAzDAiyGVVGdk",
  authDomain: "verkefni-4-og-5-i-vefthroun.firebaseapp.com",
  projectId: "verkefni-4-og-5-i-vefthroun",
  storageBucket: "verkefni-4-og-5-i-vefthroun.appspot.com",
  messagingSenderId: "769414348370",
  appId: "1:769414348370:web:89ddd7a7f5f3721952698b",
  measurementId: "G-TW6GFD2XTP",
  storageBucket: 'gs://verkefni-4-og-5-i-vefthroun.appspot.com'
};

const storage = getStorage();

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

function animage() {

}
  
 
export default function Page() {
  return <Image href={name}></Image>
}


/*export default function Database() {
  return <div>About</div>
}*/