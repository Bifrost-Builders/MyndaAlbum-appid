import { getDatabase, ref, set } from "firebase/database";

// USER WRITE FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

// Function to create a new user
export function createUser(username, displayname_value, age_value, email_value) {
  set(ref(getDatabase(), 'user/' + username), {
    displayname: displayname_value,
    email: email_value,
    age : age_value
  });
}

// Function to write/change a user's age
export function writeUserAge(username, age) {
    const ageRef = ref(getDatabase(), `user/${username}/age`);
    set(ageRef, age);
}

// Function to write/change a user's display name
export function writeUserDisplayName(username, displayName) {
    const displayNameRef = ref(getDatabase(), `user/${username}/displayname`);
    set(displayNameRef, displayName);
}

// Function to write/change a user's email
export function writeUserEmail(username, email) {
    const emailRef = ref(getDatabase(), `user/${username}/email`);
    set(emailRef, email);
}

// ALBUM/IMAGE WRITE FUNCTIONS -----------------------------------------------------------------------------------------------------------------------------

// Function to create/write a new album
export function writeNewAlbum(username, albumname) {
    const albumRef = ref(getDatabase(), `album/${username}/${albumname}`);
    set(albumRef, {});
}
// maybe need error handling for this function if album already exists ↑

// Function to write a new picture to an album
export function writeNewPicture(username, albumname, imageuuid, imageurl, city, country, province) {
    const pictureRef = ref(getDatabase(), `album/${username}/${albumname}/${imageuuid}`);
    set(pictureRef, {
        imageurl: imageurl,
        info: {
            city: city,
            country: country,
            province: province
        }
    });
}


/*
writeNewAlbum('jonjonsson123', 'an_album_name');
writeNewPicture('jonjonsson123', 'an_album_name', 'anewuuid', 'new url to image', 'new city name', 'new country name', 'new province name');
writeUserAge('jonjonsson123', 30);
writeUserDisplayName('jonjonsson123', 'Jón Jónsson');
writeUserEmail('jonjonsson123', 'jonjonsson123@gmail.com');
*/