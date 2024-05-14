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
    const [isModal, setIsModal] = useState(false);
    //If user clicks any of the albums this will be the name of that
    const [whatAlbum, setWhatAlbum] = useState(null);

    useEffect(() => {
        getFrontImages();
    }, [userAlbums]);

    const getFrontImages = () => {
        const frontImagesData = {};
        Object.keys(userAlbums).forEach((albumName) => {
            const frontImagesArray = [];
            Object.keys(userAlbums[albumName]).slice(0, 1).forEach((imageId) => {
                frontImagesArray.push(userAlbums[albumName][imageId].imageurl);
            });
            frontImagesData[albumName] = frontImagesArray;
        });
        setFrontImages(frontImagesData);
    };

    const handleModal = () => {
        setIsModal(!isModal);
    }

    const handleUserLook = (wats) => {
        handleModal();
        const data = {};
        Object.keys(userAlbums).forEach((albumName) => {
            const i = [];
            if (albumName === wats) {
                Object.keys(userAlbums[albumName]).forEach((item) => {
                    i.push(userAlbums[albumName][item]);
                });
                data[albumName] = i;
            }
        });
        setWhatAlbum(data);
    };    

    return (
        <section>
            {
                isModal ? <UserImageview images={whatAlbum} controllOpen={handleModal} />
                    
                    :
                
                    
                    <div className="h-full w-full grid grid-cols-3 max-sm:grid-cols-1 lg:grid-cols-5 place-item-center gap-12 mt-3">
                        {Object.keys(frontImages).map((albumName) => (
                            <div key={albumName} className="w-full h-full hover:bg-slate-50 hover:bg-opacity-40">
                                {frontImages[albumName] ? (
                                    <div onClick={() => handleUserLook(albumName)}>
                                        <a className={`flex justify-center item-center flex-col h-full w-full hover:-translate-y-1 transition-all hover:p-1 active:bg-slate-100 group`}>
                                            <div className="flex justify-center item-center">
                                                {frontImages[albumName].map((imageUrl, index) => (
                                                    <img key={index}
                                                        src={imageUrl}
                                                        alt={`Album ${albumName}`}
                                                        className="h-full w-full max-h-52 max-sm:max-w-52 rounded-[5px] aspect-square"
                                                    />
                                                ))}
                                            </div>
                                            <h1 className="text-lg font-semibold group-hover:text-slate-900 mt-5 text-center">{albumName}</h1>
                                        </a>
                                    </div>
                                ) : (
                                    <p>No front images available for this album</p>
                                )}
                            </div>
                        ))}
                    </div>
            }
        </section>
    );
}

function getGridColumnCount(images) {
    const imageCount = images ? images.length : 0;
    if (imageCount === 1) return 1;
    if (imageCount === 2) return 2;
    if (imageCount === 3) return 3;
    if (imageCount >= 4) return 2;
}
