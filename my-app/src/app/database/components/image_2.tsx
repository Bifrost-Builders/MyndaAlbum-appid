import { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import Image from 'next/image';
import firebaseApp from '../../firebaseConfig'; // Import initialized Firebase app

const storage = getStorage(firebaseApp); // Use the provided app

// Points to the root reference
const storageRef = ref(storage);

// Points to 'images'
const imagesRef = ref(storageRef, 'image/jpeg');

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
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const url = await getDownloadURL(spaceRef);
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    };

    fetchImageUrl();
  }, []);

  return (
    <div>
      {imageUrl && (
        <Image
          src="gs://verkefni-4-og-5-i-vefthroun.appspot.com/space.jpg"
          alt="Space"
          width={500}
          height={500}
        />
      )}
    </div>
  );
}
