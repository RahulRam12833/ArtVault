import { useEffect} from "react";
import { useDispatch } from "react-redux";

import {Routes, Route} from "react-router-dom"
import { onAuthStateChangedListener,createUserDocumentFromAuth,dataBase} from "./utilities/firebase/firebase.utils";

import Home from "./routes/home/home.component"
import Navbar from "./routes/navigation/navigation.component"
import Authentication from "./routes/authentication/authentication.component"
import Shop from "./routes/shop/shop.component"
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.reducer";
import {doc,getDoc} from "firebase/firestore"
const App=()=> {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);

        const userDocRef = doc(dataBase, "users", user.uid);
        const userSnapshot = await getDoc(userDocRef);

        let pickedUser;
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          pickedUser = {
            accessToken: user.accessToken,
            email: user.email,
            displayName: userData.displayName || user.displayName || null,
          };
        } else {
          // Fallback to basic user info from Firebase Auth
          pickedUser = {
            accessToken: user.accessToken,
            email: user.email,
            displayName: user.displayName || null,
          };
        }
        dispatch(setCurrentUser(pickedUser));
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return unsubscribe;
  }, [dispatch]);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />}/>
          <Route path='auth' element={<Authentication />}/>
          <Route path="shop/*" element={<Shop/>} />
          <Route path="checkout" element={<Checkout/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
