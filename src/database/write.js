import { doc, addDoc, collection, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./config"

export async function save(data) {

    const dbCollection = collection(db, 'transaction')
    const docRef = await addDoc(dbCollection, data);
    return docRef.id;

}

export async function update(id, data) {
    const docRef = doc(db, "transaction", id);
    await updateDoc(docRef,
        data
    );

}

export async function remove(id) {
    const docRef = doc(db, "transaction", id);
    await deleteDoc(docRef);

}


