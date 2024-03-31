import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./config"


export async function load() {

    const data = [];
    const querySnapshot = await getDocs(collection(db, "transaction"));

    querySnapshot.forEach((doc) => {
        const post = {

            ...doc.data(),
            id: doc.id
        }
        data.push(post);
    })
    return data;

}

