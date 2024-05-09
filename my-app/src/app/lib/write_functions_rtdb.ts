import { getDatabase, ref, set } from "firebase/database";

export function createUser(username, displayname_value, age_value, email_value) {
  set(ref(getDatabase(), 'User/' + username), {
    displayname: displayname_value,
    email: email_value,
    age : age_value
  });
}

// Function to write a user's age
export function writeUserAge(username, age) {
    const ageRef = ref(getDatabase(), `User/${username}/Age`);
    set(ageRef, age);
}

// Function to write a user's display name
export function writeUserDisplayName(username, displayName) {
    const displayNameRef = ref(getDatabase(), `User/${username}/Display Name`);
    set(displayNameRef, displayName);
}

// Function to write a user's email
export function writeUserEmail(username, email) {
    const emailRef = ref(getDatabase(), `User/${username}/email`);
    set(emailRef, email);
}

// Function to write an image URL to an album
export function writeAlbumImageUrl(username, albumname, imageid, imageUrl) {
    const imageUrlRef = ref(getDatabase(), `Album/${username}/${albumname}/${imageid}/imageurl`);
    set(imageUrlRef, imageUrl);
}

// Function to write geoinfo to an image in an album
export function writeImageGeoInfo(username, albumname, imageid, city, country, province) {
    const geoInfoRef = ref(getDatabase(), `Album/${username}/${albumname}/${imageid}/info`);
    set(geoInfoRef, { city, country, province });
}

writeUserAge('JonJonsson123', 30);
writeUserDisplayName('JonJonsson123', 'Jón Jónsson');
writeUserEmail('JonJonsson123', 'jonjonsson123@gmail.com');
writeAlbumImageUrl('JonJonsson123', 'Album1', 'uuid', 'url to image');
writeImageGeoInfo('JonJonsson123', 'Album1', 'uuid', 'city name', 'country name', 'province name');