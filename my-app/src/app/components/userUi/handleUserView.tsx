"use client"
{/* <div key={albumName} className="mt-4">
<h2 className="text-xl font-semibold">{albumName}</h2>
<div className="grid grid-cols-3 gap-4">
    {Object.keys(userAlbums[albumName]).map((imageId) => (
        <div key={imageId}>
            <img src={userAlbums[albumName][imageId].imageurl} alt="Album" className="w-full h-auto rounded-md" />
            <p className="text-sm">City: {userAlbums[albumName][imageId].info.city}</p>
            <p className="text-sm">Country: {userAlbums[albumName][imageId].info.country}</p>
            <p className="text-sm">Province: {userAlbums[albumName][imageId].info.province}</p>
        </div>
    ))}
</div>
</div> */}
import { useEffect, useState } from "react";
import UserImageview from "./userImagview"

export default function HandleUserView({ userAlbums }) {
    const [frontImages, setFrontImages] = useState({});

    useEffect(() => {
        getFrontImages();
    }, [userAlbums]);

    const getFrontImages = () => {
        const frontImagesData = {};
        Object.keys(userAlbums).forEach((albumName) => {
            const frontImagesArray = [];
            Object.keys(userAlbums[albumName]).slice(0, 4).forEach((imageId) => {
                frontImagesArray.push(userAlbums[albumName][imageId].imageurl);
            });
            frontImagesData[albumName] = frontImagesArray;
        });
        setFrontImages(frontImagesData);
    };

    return (
        <div className="h-full w-full grid grid-cols-3 gap-12">
            {Object.keys(frontImages).map((albumName) => (
                <div key={albumName} className="w-36 h-36">
                    {frontImages[albumName] ? (
                        <a href={`/secure/travel=${albumName}`}>
                            <a className={`grid grid-cols-${getGridColumnCount(frontImages[albumName])} ${getGridColumnCount(frontImages[albumName]) === 1 ? 'place-items-center' : 'none'} h-full w-full hover:-translate-y-1 transition-all hover:bg-slate-50 hover:p-1 active:bg-slate-100 group`}>
                                <div className="grid grid-cols-2">
                                    {frontImages[albumName].map((imageUrl, index) => (
                                        <img key={index}
                                            src={imageUrl}
                                            alt={`Album ${albumName}`}
                                            className="h-full w-full aspect-square"
                                        />
                                    ))}
                                </div>
                                <h1 className="text-lg font-semibold group-hover:text-slate-900 mt-5">{albumName}</h1>
                            </a>
                        </a>
                    ) : (
                        <p>No front images available for this album</p>
                    )}
                </div>
            ))}
        </div>
    );
}

function getGridColumnCount(images) {
    const imageCount = images ? images.length : 0;
    if (imageCount === 1) return 1;
    if (imageCount === 2) return 2;
    if (imageCount === 3) return 3;
    if (imageCount >= 4) return 2;
}
