

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc,getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLqwOxwbWF89ZVE-Hx6Oauw9eIuy8Syp0",
    authDomain: "test-project-67367.firebaseapp.com",
    projectId: "test-project-67367",
    storageBucket: "test-project-67367.appspot.com",
    messagingSenderId: "986217264801",
    appId: "1:986217264801:web:ed5c55b76ba4fe71a322e0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default async function signUpUser({ email, password }) {
    try{
        const res=await createUserWithEmailAndPassword(auth, email, password,)
        
        await setDoc(doc(db, "users", res.user.uid), {
            email
        });
        return res
    }
    catch(e){
        alert(e.message)
    }
}



export {
    auth
}