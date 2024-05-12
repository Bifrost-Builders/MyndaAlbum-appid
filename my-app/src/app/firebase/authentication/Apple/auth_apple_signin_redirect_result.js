import { getAuth, getRedirectResult, OAuthProvider } from "firebase/auth";

// Result from Redirect auth flow.
const auth = getAuth();
getRedirectResult(auth)
  .then((result) => {
    const credential = OAuthProvider.credentialFromResult(result);
    if (credential) {
      // You can also get the Apple OAuth Access and ID Tokens.
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;
    }
    // The signed-in user info.
    const user = result.user;
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