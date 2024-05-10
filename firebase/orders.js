import {getFirestore,addDoc,collection,getDocs} from "firebase/firestore"
import app from "./config"

const db = getFirestore(app);

export const addOrder=async (userId,ProductIds) =>{
    const order = await addDoc(collection(db,"Order"),{
     userId: userId,
     ProductIds : ProductIds,   
    })
    return order.id;
}
export const getOrders = async (userId) => {
    const order = await getDocs(collection(db, "Order"));
    const ordersList = [];
    order.forEach((doc) => {
      const data = doc.data();
      if (data.userId === userId) {
        ordersList.push({ ...data, id: doc.id });
      }
    });
    return ordersList;
  };