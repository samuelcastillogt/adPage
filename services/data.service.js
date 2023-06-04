import {database} from "./configFirebase.js"
import { collection, setDoc, doc, addDoc, getDoc, query, where, getDocs } from "firebase/firestore";
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
    getAllAds = async()=>{
      const Ads = []
      const querySnapshot = await getDocs(this.adsRef);
      querySnapshot.forEach((doc) => {
        Ads.push({
          id: doc.id,
          data: doc.data()
        })
      });
      return Ads

    }
    getAdsByAutor = async(id)=>{
      const Ads = []
      const q = query(this.adsRef, where("autor", "==", id))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        Ads.push({
          id: doc.id,
          data: doc.data()
        })
      });
      return Ads

    }
}
const serviceData = new ServiceData()
export {serviceData}