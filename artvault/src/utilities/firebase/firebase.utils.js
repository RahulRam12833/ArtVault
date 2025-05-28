import {initializeApp} from 'firebase/app'
import {getAuth,signInWithRedirect,signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

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