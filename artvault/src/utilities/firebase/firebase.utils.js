import {initializeApp} from 'firebase/app'
import {getAuth,signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';

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
  return userDocRef;
}



export const createAuthUserWithEmailAndPwd = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}
