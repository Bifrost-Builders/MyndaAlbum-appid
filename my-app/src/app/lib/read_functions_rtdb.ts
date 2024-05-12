import { getDatabase ,onValue, ref , child, get } from "firebase/database";

// READ USER FUNCTIONS -----------------------------------------------------------------------------------------------------

// Function to read all usernames
export function readAllUsernames() {
    const usersRef = ref(getDatabase(), 'user');
    onValue(usersRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const usernames = Object.keys(data);
            return usernames;
        } else {
            console.log("No users found.");
        }
    });
}

// Function to search for a specific username
export function searchUsername(username: string) {
    const userRef = ref(getDatabase(), `user/${username}`);
    get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            const user = Object.keys(data);
            return user;
        } else {
            console.log(`User ${username} does not exist.`);
        }
    });
}

// Function to read a user's age
export function readUserAge(username: string) {
    const ageRef = ref(getDatabase(), `user/${username}/age`);
    onValue(ageRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const age = Object.keys(data);
            return age;
        } else {
            console.log("No user age found.");
        }
    });
}

// Function to read a user's display name
export function readUserDisplayName(username) {
    const displayNameRef = ref(getDatabase(), `user/${username}/displayname`);
    onValue(displayNameRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const dName = Object.keys(data);
            return dName;
        } else {
            console.log("No display name found.");
        }
    }, (error) => {
        console.log(`Error reading user's display name: ${error}`);
    });
}

// Function to read a user's email
export function readUserEmail(username: string) {
    const emailRef = ref(getDatabase(), `user/${username}/email`);
    onValue(emailRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const email = Object.keys(data);
            return email;
        } else {
            console.log("No user email found.");
        }
    }, (error) => {
        console.log(`Error reading user email: ${error}`);
    });
}



// READ ALBUM/IMAGES FUNCTIONS  -----------------------------------------------------------------------------------------------------

/* Mun örugglega ekki þurfa að nota þetta function
// Function to read all album names
export function readAllAlbumNames() {
    const albumsRef = ref(getDatabase(), 'album');
    onValue(albumsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const albumNames = Object.keys(data);
            return albumNames;
        } else {
            console.log("No albums found.");
        }
    });
}
*/
// Function to read all albums for a specified user
export function readUserAlbums(username: string) {
    const albumsRef = ref(getDatabase(), `album/${username}`);
    onValue(albumsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const userAlbums = Object.keys(data);
            return userAlbums;
        } else {
            console.log(`No albums found for user ${username}.`);
        }
    });
}

// Function to search for a specific album for a specific user and retunr the album data object
export function searchUserAlbum(username: string, albumname: string) {
    const albumRef = ref(getDatabase(), `album/${username}/${albumname}`);
    return get(albumRef).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data;
        } else {
            console.log(`Album ${albumname} does not exist for user ${username}.`);
            return null;
        }
    });
}

// Function sem les myndar URL úr realtime database
export function readAlbumImageUrl(username: string, albumname: string, imageuuid: string) {
    const imageUrlRef = ref(getDatabase(), `album/${username}/${albumname}/${imageuuid}/imageurl`);
    onValue(imageUrlRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const imageurl = Object.keys(data);
            return imageurl;
        } else {
            console.log("No image URL found.");
        }
    }, (error) => {
        console.log(`Error reading image URL: ${error}`); 
    });
}

// Function sem les geoinfo úr mynd í albúmi úr realtime database
export function readImageGeoInfo(username: string, albumname: string, imageuuid: string) {
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
searchUsername('JonJonsson123');
searchUserAlbum('JonJonsson123', 'Album1');
readAlbumImages('JonJonsson123', 'Album1');
readUserAge('JonJonsson123');
readUserDisplayName('JonJonsson123');
readUserEmail('JonJonsson123');
readAlbumImageUrl('JonJonsson123', 'Album1', 'uuid');
readImageGeoInfo('JonJonsson123', 'Album1', 'uuid');
*/