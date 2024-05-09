import { getDatabase ,onValue, ref , child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "@/app/firebase/firebaseConfig";


const firebaseApp = initializeApp(firebaseConfig);


// READ USER FUNCTIONS -----------------------------------------------------------------------------------------------------
export function readFromFirebase() {
  const database = ref(getDatabase());
  get(child(database, '/User')).then((data) => {
    if (data.exists()){
      console.log(data.val())
    } else {
      console.log("No data found")
    };
  }).catch((e) => {
    console.log("Error", e)
  })
}

// Function to read a user's age
export function readUserAge(username) {
    const ageRef = ref(getDatabase(), `User/${username}/Age`);
    onValue(ageRef, (snapshot) => {
        const data = snapshot.val();
        console.log(`User's age: ${data}`);
    });
}

// Function to read a user's display name
export function readUserDisplayName(username) {
    const displayNameRef = ref(getDatabase(), `User/${username}/Display Name`);
    onValue(displayNameRef, (snapshot) => {
        const data = snapshot.val();
        console.log(`User's display name: ${data}`);
    });
}

// Function to read a user's email
export function readUserEmail(username) {
    const emailRef = ref(getDatabase(), `User/${username}/email`);
    onValue(emailRef, (snapshot) => {
        const data = snapshot.val();
        console.log(`User's email: ${data}`);
    });
}


// READ ALBUM/IMAGES FUNCTIONS  -----------------------------------------------------------------------------------------------------

// Function sem les myndar URL úr realtime database
export function readAlbumImageUrl(username, albumname, imageuuid) {
    const imageUrlRef = ref(getDatabase(), `Album/${username}/${albumname}/${imageuuid}/imageurl`);
    onValue(imageUrlRef, (snapshot) => {
        const data = snapshot.val();
        console.log(`Image URL: ${data}`);
    });
}

// Function sem les geoinfo úr mynd í albúmi úr realtime database
export function readImageGeoInfo(username, albumname, imageuuid) {
    const geoInfoRef = ref(getDatabase(), `Album/${username}/${albumname}/${imageuuid}/info`);
    onValue(geoInfoRef, (snapshot) => {
        const data = snapshot.val();
        console.log(`Geo Info: ${data}`);
    });
}

// Function sem les allar myndir úr albúmi á realtime database
export function readAlbumImages(username, albumname) {
    const albumRef = ref(getDatabase(), `Album/${username}/${albumname}`);
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