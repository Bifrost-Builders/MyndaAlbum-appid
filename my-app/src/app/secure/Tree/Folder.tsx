import React from 'react';

const Folder = ({ images }) => {
    // Render all images in the folder
    return (
        <div className="flex flex-wrap justify-center">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} className="w-32 h-32 object-cover m-2" />
            ))}
        </div>
    );
};

export default Folder;
