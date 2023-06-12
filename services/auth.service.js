import { signInWithPopup, 
         GoogleAuthProvider, 
         onAuthStateChanged, 
         setPersistence, 
         browserSessionPersistence, 
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword
        } from "firebase/auth";
import { auth } from "./configFirebase";
import { store } from "@/redux/store";
import {SET_USER} from "../redux/use.slice"
import { serviceData } from "./data.service";
const provider = new GoogleAuthProvider();
class AuthService{
    login = async()=>{
        setPersistence(auth, browserSessionPersistence).then(()=>{
                 signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    store.dispatch(SET_USER(user))
    console.log(user)
    return user
  })
        }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("errtro", error)
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
    
            }
          })
    }
    createUser=async(username, email, password)=>{
      console.log(username, email, password)
      createUserWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
          const user = userCredential.user;
          await serviceData.addDataUser(user, username).then(response =>{ 
          console.log(response)
          store.dispatch(SET_USER(user))
      })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
    loginEmailPass = async(email, pass)=>{
      signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    const user = userCredential.user;
    store.dispatch(SET_USER(user))
  })
  .catch((error) => {
    alert("Usuario o contraseña equivocada")
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    }
}
const authService = new AuthService()
export {authService}