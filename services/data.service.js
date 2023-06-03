import {database} from "./configFirebase.js"
import { collection, setDoc, doc, addDoc, getDoc } from "firebase/firestore";
class ServiceData {
    adsRef = collection(database, 'ads')
    saveAdData = async(data)=>{
       const save = await addDoc(this.adsRef, data);
       return save.id
    }
    getAdData= async(id)=>{
        const docRef = doc(database, 'ads', id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            return {data:docSnap.data(), id: docSnap.id}
          } else {
            console.log("No such document!");
          }
    }
}
const serviceData = new ServiceData()
export {serviceData}