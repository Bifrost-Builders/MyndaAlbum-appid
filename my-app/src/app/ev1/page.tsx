"use client"
import { useState, useEffect } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "@/app/firebase/firebaseConfig"
import { writeNewAlbum, writeNewPicture } from "../lib/write_functions_rtdb";

const firebaseApp = initializeApp(firebaseConfig);

type imageProps = {
    uuid: string,
    imageUrl: string,
    city: string,
    country: string,
    province: string,
}


type writingProps = {
    userName: string,
    folder: string,
    imageInfo: imageProps
};

function writeToAlbum(obj: writingProps) {
    return new Promise((resolve, reject) => {
        if (obj) {
            try {
                writeNewPicture(obj.userName, obj.folder, obj.imageInfo.uuid, obj.imageInfo.imageUrl, obj.imageInfo.city, obj.imageInfo.country, obj.imageInfo.province);
                console.log("Done")    
                resolve("Done")
            } catch (e) {
                console.log(`Error ${e}`)
                reject("Failed")
            }
        }
    })
};
/* 
export function getUserAlbums(userName) {
    return new Promise((resolve, reject) => {
        const req = async () => {
            try {
                const databaseRef = ref(getDatabase());
                const snapshot = await get(child(databaseRef, `/album/${userName}`));
                if (snapshot.exists()) {
                    const albumsObject = snapshot.val();
                    resolve(albumsObject);
                } else {
                    reject("No data found");
                }
            } catch (error) {
                reject(`Failed because of: ${error}`);
            }
        };
        req();
    });
}
 */

export async function getUserAlbums(userName) {
    let unr = userName.replace(/[\.\#$\[\]@]/g, '').trim();
    try {
        const databaseRef = ref(getDatabase());
        const snapshot = await get(child(databaseRef, `/album/${unr}`));
        if (snapshot.exists()) {
            const albumsObject = snapshot.val();
            return albumsObject;
        } else {
            throw new Error("No data found");
        }
    } catch (error) {
        throw new Error(`Failed because of: ${error}`);
    }
}

type StorageType = {
    imageUrl: string,
    info: imageProps,
}
function Ev1() {
    const [albums, setAlbums] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [inputField, setInputField] = useState("");

    useEffect(() => {
        async function fetchAlbums() {
            try {
                const data: any = await getUserAlbums(inputField);
                console.log("Running", data);
                setAlbums(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchAlbums();
    }, [inputField]);

    useEffect(() => {
        const user: writingProps = {
            userName: "jonjonsson123",
            folder: "123",
            imageInfo: {
                uuid: "113",
                imageUrl: "www",
                city: "llll",
                country: "224fr",
                province: "asjcij",
            }
        }
        
        writeToAlbum(user)
    }, [])

    return (
        <section className='h-screen w-full overflow-hidden bg-slate-100 px-10 py-5'>
            <h1 className='text-xl'>Dev page</h1>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <section className="absolute top-[26rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl px-8 py-8 w-5/6 max-md:top-[500px] max-sm:top-[430px] min-h-[25rem] mb-4 bg-slate-200">
                {/* Display albums */}
                <input
                    type="text"
                    placeholder="Search for album with name"
                    value={inputField}
                    onChange={e => setInputField(e.target.value)}
                />

                
            </section>
        </section>
    );
}

export default Ev1;
