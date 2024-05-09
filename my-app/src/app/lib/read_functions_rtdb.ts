import { getDatabase ,onValue, ref , child, get } from "firebase/database";

// READ USER FUNCTIONS -----------------------------------------------------------------------------------------------------

// Function to read a user's age
export function readUserAge(username) {
    const ageRef = ref(getDatabase(), `user/${username}/age`);
    onValue(ageRef, (snapshot) => {
        const data = snapshot.val();
        console.log(`User's age: ${data}`);
    });
}

// Function to read a user's display name
export function readUserDisplayName(username) {
    const displayNameRef = ref(getDatabase(), `user/${username}/displayname`);
    onValue(displayNameRef, (snapshot) => {
        const data = snapshot.val();
        console.log(`User's display name: ${data}`);
    });
}

// Function to read a user's email
export function readUserEmail(username) {
    const emailRef = ref(getDatabase(), `user/${username}/email`);
    onValue(emailRef, (snapshot) => {
        const data = snapshot.val();
        console.log(`User's email: ${data}`);
    });
}


// READ ALBUM/IMAGES FUNCTIONS  -----------------------------------------------------------------------------------------------------

// Function sem les myndar URL úr realtime database
export function readAlbumImageUrl(username, albumname, imageuuid) {
    const imageUrlRef = ref(getDatabase(), `album/${username}/${albumname}/${imageuuid}/imageurl`);
    onValue(imageUrlRef, (snapshot) => {
        const data = snapshot.val();
        console.log(`Image URL: ${data}`);
    });
}

// Function sem les geoinfo úr mynd í albúmi úr realtime database
export function readImageGeoInfo(username, albumname, imageuuid) {
    const geoInfoRef = ref(getDatabase(), `album/${username}/${albumname}/${imageuuid}/info`);
    onValue(geoInfoRef, (snapshot) => {
        const data = snapshot.val();
        console.log(`Geo Info: ${data}`);
    });
}

// Function sem les allar myndir úr albúmi á realtime database
export function readAlbumImages(username, albumname) {
    const albumRef = ref(getDatabase(), `album/${username}/${albumname}`);
    onValue(albumRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const imageuuid = childSnapshot.key;
            const imageUrl = childSnapshot.val().imageurl;
            const geoInfo = childSnapshot.val().info;
            console.log(`Image ID: ${imageuuid}, Image URL: ${imageUrl}, Geo Info: ${geoInfo}`);
        });
    });
}

/*
readAlbumImages('JonJonsson123', 'Album1');
readUserAge('JonJonsson123');
readUserDisplayName('JonJonsson123');
readUserEmail('JonJonsson123');
readAlbumImageUrl('JonJonsson123', 'Album1', 'uuid');
readImageGeoInfo('JonJonsson123', 'Album1', 'uuid');
*/