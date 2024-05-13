import { getDatabase, ref, set, get } from "firebase/database";

// USER WRITE FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

// Function to create a new user
export function createUser(username, displayname_value, age_value, email_value) {
    set(ref(getDatabase(), 'user/' + username), {
        displayname: displayname_value,
        email: email_value,
        age : age_value
    })
    .then(() => {
        console.log("User successfully created!");
    })
    .catch((error) => {
        console.error("Error creating user: ", error);
    });
}

// Function to write/change a user's age
export function writeUserAge(username, age) {
    const ageRef = ref(getDatabase(), `user/${username}/age`);
    set(ageRef, age)
    .then(() => {
        console.log("Age saved successfully!");
    })
    .catch((error) => {
        console.error("The write failed...", error);
    });
}


// Function to write/change a user's display name
export function writeUserDisplayName(username, displayName) {
    const displayNameRef = ref(getDatabase(), `user/${username}/displayname`);
    set(displayNameRef, displayName)
    .then(() => {
        console.log("Display name saved successfully!");
    })
    .catch((error) => {
        console.error("The write failed...", error);
    });
}

// Function to write/change a user's email
export function writeUserEmail(username, email) {
    const emailRef = ref(getDatabase(), `user/${username}/email`);
    set(emailRef, email)
    .then(() => {
        console.log("Email saved successfully!");
    })
    .catch((error) => {
        console.error("The write failed...", error);
    });
}

// ALBUM/IMAGE WRITE FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

// Function to create/write a new album
export function writeNewAlbum(username, albumname) {
    const albumRef = ref(getDatabase(), `album/${username}/${albumname}`);
    get(albumRef)
    .then((snapshot) => {
        if (snapshot.exists()) {
            console.log("Album already exists!");
        } else {
            set(albumRef, {})
            .then(() => {
                console.log("Data saved successfully!");
            })
            .catch((error) => {
                console.error("The write failed...", error);
            });
        }
    })
    .catch((error) => {
        console.error("Error checking album existence: ", error);
    });
}

// Function to rename an album
export function renameAlbum(username, currentAlbumName, newAlbumName) {
    const albumRef = ref(getDatabase(), `album/${username}/${currentAlbumName}`);
    get(albumRef)
    .then((snapshot) => {
        if (snapshot.exists()) {
            const albumData = snapshot.val();
            const newAlbumRef = ref(getDatabase(), `album/${username}/${newAlbumName}`);
            set(newAlbumRef, albumData)
            .then(() => {
                console.log("Album renamed successfully!");
                // Delete the old album
                set(albumRef, null)
                .then(() => {
                    console.log("Old album deleted successfully!");
                })
                .catch((error) => {
                    console.error("Error deleting old album: ", error);
                });
            })
            .catch((error) => {
                console.error("Error renaming album: ", error);
            });
        } else {
            console.log("Album does not exist!");
        }
    })
    .catch((error) => {
        console.error("Error checking album existence: ", error);
    });
}

// Function to write a new picture to an album
export function writeNewPicture(username, albumname, imageuuid, imageurl, city, country, province) {
    //!!!nst is needed
    let nst = username.replace(/[\.\#$\[\]@]/g, '').trim();
    const pictureRef = ref(getDatabase(), `album/${nst}/${albumname}/${imageuuid}`);
    set(pictureRef, {
        imageurl: imageurl,
        info: {
            city: city,
            country: country,
            province: province
        }
    })
    .then(() => {
        console.log("Image saved successfully!");
    })
    .catch((error) => {
        console.error("The write failed...", error);
    });
}