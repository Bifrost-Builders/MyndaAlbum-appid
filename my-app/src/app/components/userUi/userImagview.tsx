import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../baseComp/button';

const UserImageView = ({ images,controllOpen }) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="grid gap-y-4 my- ">
      <div className='h-14 absolute bg-white z-[300] max-sm:top-16 max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 md:right-5 md:top-5 md:h-12'>
        <Button
            title='Go back'
            variant='secondary'
          size='sm'
          className='z-50 '
            onClick={() => controllOpen()}
        />
      </div>
      {Object.keys(images).map((key) => (
        <div key={key} className="flex flex-col gap-y-5">
          {images[key].map((image, index) => (
            <motion.div
              key={index}
              className='bg-black p-5 rounded-[12px] text-white grid grid-cols-2 place-item-center gap-x-5'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openFullscreen(image.imageurl)}
            >
              <img
                src={image.imageurl}
                alt={`Image ${index}`}
                className="h-44 w-full object-cover rounded-lg cursor-pointer"
              />
              <div className="mt-2 text-lg">
                <p className="font-semibold">City: {image.info.city}</p>
                <p className="font-semibold">Country: {image.info.country}</p>
                <p className="font-semibold">Province: {image.info.province}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ))}

      {fullscreenImage && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-lg bg-gray-800 rounded-full w-8 h-8 flex justify-center items-center"
              onClick={closeFullscreen}
            >
              X
            </button>
            <img src={fullscreenImage} alt="Fullscreen" className="max-h-screen max-w-screen" />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default UserImageView;
