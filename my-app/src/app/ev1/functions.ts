import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "@/app/firebase/firebaseConfig"

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