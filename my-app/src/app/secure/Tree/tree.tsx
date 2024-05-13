import React, { useState, useEffect } from 'react';
import albumsData from './temp_pictures.json';
import Folder from './Folder'; // Import the Folder component

const sortAlbumsByDate = (albums) => {
    return albums.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        // Compare years first in reverse order
        if (dateA.getFullYear() !== dateB.getFullYear()) {
            return dateB.getFullYear() - dateA.getFullYear();
        }
        // If years are the same, compare months in reverse order
        if (dateA.getMonth() !== dateB.getMonth()) {
            return dateB.getMonth() - dateA.getMonth();
        }
        // If months are the same, compare days in reverse order
        return dateB.getDate() - dateA.getDate();
    }).map((album, index) => ({ ...album, id: index + 1 }));
};

const Tree = () => {
    const [selectedImages, setSelectedImages] = useState(null); // State to track selected images
    const [imageHeight, setImageHeight] = useState(0);
    const sortedAlbums = sortAlbumsByDate(albumsData);

    useEffect(() => {
        // Calculate the height of the first image
        const img = new Image();
        img.onload = () => {
            setImageHeight(img.height);
        };
        img.src = sortedAlbums[0].images[0];
    }, [sortedAlbums]);

    // Function to handle image click
    const handleImageClick = (images) => {
        setSelectedImages(images); // Update selected images
    };

    return (
        <div className="flex justify-center">
            {/* Left Column */}
            <div className="w-45 pr-4 pt-12 pb-4">
                {sortedAlbums.map((album) => (
                    album.id % 2 === 0 && (
                        <div key={album.id} className="w-32 h-auto pt-10 flex flex-col items-center">
                            <h3 className="text-2xl font-bold">{album.date}</h3>
                            <div 
                                className="overflow-hidden w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out mb-2"
                                onClick={() => handleImageClick(album.images)} // Add click event handler
                            >
                                <img src={album.images[0]} alt={`Image 1`} className="w-full h-full object-cover" />
                            </div>
                            <div className=' pr-10 pl-7 bg-black ml-9 rounded-md'>
                                <div className=' pr-10 pt-2 pl-10 bg-black'>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
            {/* Middle Column */}
            <div className="w-3 bg-black rounded-md pb-5"></div>
            {/* Right Column */}
            <div className="w-45 pl-4 pb-4">
                {sortedAlbums.map((album) => (
                    album.id % 2 !== 0 && (
                        <div key={album.id} className="w-32 h-auto pt-10 flex flex-col items-center">
                            <h3 className="text-2xl font-bold">{album.date}</h3>
                            <div 
                                className="overflow-hidden w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out mb-2"
                                onClick={() => handleImageClick(album.images)} // Add click event handler
                            >
                                <img src={album.images[0]} alt={`Image 1`} className="w-full h-full object-cover" />
                            </div>
                            <div className=' pl-10 pr-7 bg-black mr-9 rounded-md'>
                                <div className=' pl-10 pt-2 pr-10 bg-black'>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
            {/* Display Folder component if selected images exist */}
            {selectedImages && <Folder images={selectedImages} />}
        </div>
    );
};

export default Tree;
