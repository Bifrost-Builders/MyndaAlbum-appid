import { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import Image from 'next/image';

const storage = getStorage();

// Points to the root reference
const storageRef = ref(storage);

// Points to 'images'
const imagesRef = ref(storageRef, 'images');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
const fileName = 'space.jpg';
const spaceRef = ref(imagesRef, fileName);

export default function Mynd() {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        getDownloadURL(spaceRef)
            .then((url) => {
                setImageUrl(url);
            })
            .catch((error) => {
                console.error('Error getting download URL:', error);
            });
    }, []);

    return (
        <div>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="Space"
                    width={500}
                    height={500}
                />
            )}
        </div>
    );
}
