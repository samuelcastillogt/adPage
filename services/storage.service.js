import { storage } from "./configFirebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const imagesRef = ref(storage, 'images');
class StorageService{
    uploadFile= async(file)=>{
        const snapshot = await uploadBytes(imagesRef, file)
        const downloadURL = await getDownloadURL(snapshot.ref)
        return downloadURL
    }
}
const storageService = new StorageService()
export {storageService}

