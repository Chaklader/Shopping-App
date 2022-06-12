import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';


import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCfi5BqNJ34czpGv5M3Tor_9xBVhWUO0Mc",
    authDomain: "shoppingapp-6bd5b.firebaseapp.com",
    projectId: "shoppingapp-6bd5b",
    storageBucket: "shoppingapp-6bd5b.appspot.com",
    messagingSenderId: "928465913178",
    appId: "1:928465913178:web:2efe00657d7823a1421f63"
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(o => {

        const docRef = doc(collectionRef, o.title.toLowerCase());
        batch.set(docRef, o);
    })

    await batch.commit();
    console.log('done')
}


export const getCategoriesAndDocuments = async () => {

    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {

        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;

        return acc;
    }, {});

    return categoryMap;
}


export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {

    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {

        const {displayName, email} = userAuth;
        const createAt = new Date();


        try {

            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log("error creating the user", error.message)
        }

    }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);



