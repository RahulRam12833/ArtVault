import {initializeApp} from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZrVU30Tdd5anjm8psQ89WrFAWHJVbXfA",
  authDomain: "artvault-db.firebaseapp.com",
  projectId: "artvault-db",
  storageBucket: "artvault-db.firebasestorage.app",
  messagingSenderId: "940772284714",
  appId: "1:940772284714:web:a84b88bca86e08ff23a653"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider=new GoogleAuthProvider();
// Set custom parameters for the Google Auth provider to always prompt account selection
provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const dataBase = getFirestore();

export const addCollectionAndDocuments=async (collectionKey,objectsToAdd)=>{
  const collectionReference=collection(dataBase,collectionKey);
  const batch=writeBatch(dataBase);

  objectsToAdd.forEach((object)=>{
    const docRef=doc(collectionReference,object.title.toLowerCase());
    batch.set(docRef,object)
  })

  await batch.commit();
  console.log("done")
}

export const getCategoriesandDocs=async()=>{
  const collectionRef=collection(dataBase,"categories");
  const q=query(collectionRef);

  const querySnapShot=await getDocs(q);
   return querySnapShot.docs.map((docSnapshot) => docSnapshot.data());
}

export const createUserDocumentFromAuth = async (userAuth,additionInformation) => {
  if(!userAuth) return;
  // Create a reference to the user document in Firestore
  const userDocRef = doc(dataBase, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  // If user data does not exist, create it

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionInformation // Spread any additional information provided
      });
    } catch (error) {
      console.error("Error creating the user", error);
    }
  }
  return userSnapshot; // Return the user document snapshot
}



export const createAuthUserWithEmailAndPwd = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}


export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
}