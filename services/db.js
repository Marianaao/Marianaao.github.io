import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { firebaseConfig } from "./firebaseConfig.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const addUser = async ({ email, password }) => {
    try {
        const docRef = await addDoc(collection(db, "usuarios"), {
            email,
            password
        });
        console.log("Document written with ID: ", docRef.id);
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
};
const addPost = async (post) => {
    try {
        const docRef = await addDoc(collection(db, "posts"), post);
        console.log("Document written with ID: ", docRef.id);
    }
    catch (e) {
        alert("Error adding document");
    }
};
const listenPosts = (notifyComponent) => {
    const handleDbChange = (documents) => {
        const potst = documents.docs.map((doc) => doc.data());
        notifyComponent(potst);
    };
    onSnapshot(collection(db, "posts"), handleDbChange);
};
export default { addPost, listenPosts };
