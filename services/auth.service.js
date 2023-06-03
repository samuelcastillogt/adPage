import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, setPersistence, browserSessionPersistence } from "firebase/auth";

import { auth } from "./configFirebase";
const provider = new GoogleAuthProvider();
class AuthService{
    login = async()=>{
        setPersistence(auth, browserSessionPersistence).then(()=>{
                 signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user)
    return user
  })
        }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("errtro", error)
    // ...
  });
   
    }
    getCurrentUser = ()=>{
        const user = auth.currentUser
if (user) {
    return user
} else {
  return
}
    }
    getDataActive = ()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              return uid
            } else {
              // User is signed out
              // ...
            }
          })
    }
}
const authService = new AuthService()
export {authService}