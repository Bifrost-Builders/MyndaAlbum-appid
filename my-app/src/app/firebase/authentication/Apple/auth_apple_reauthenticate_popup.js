import { getAuth, reauthenticateWithPopup, OAuthProvider } from "firebase/auth";

// Result from Redirect auth flow.
const auth = getAuth();
const provider = new OAuthProvider('apple.com');

reauthenticateWithPopup(auth.currentUser, provider)
  .then((result) => {
    // User is re-authenticated with fresh tokens minted and can perform
    // sensitive operations like account deletion, or updating their email
    // address or password.

    // The signed-in user info.
    const user = result.user;

    // You can also get the Apple OAuth Access and ID Tokens.
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The credential that was used.
    const credential = OAuthProvider.credentialFromError(error);

    // ...
  });