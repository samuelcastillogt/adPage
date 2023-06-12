import { storage } from "./configFirebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';


class StorageService{
    uploadFile= async(file)=>{
        const name = uuidv4();
        const imagesRef = ref(storage, name);
        const snapshot = await uploadBytes(imagesRef, file)
        console.log(snapshot)
        const downloadURL = await getDownloadURL(snapshot.ref)
        console.log(downloadURL)
        return downloadURL
    }
}
const storageService = new StorageService()
export {storageService}

