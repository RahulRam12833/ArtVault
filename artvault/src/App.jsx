import { useEffect} from "react";
import { useDispatch } from "react-redux";

import {Routes, Route} from "react-router-dom"
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "./utilities/firebase/firebase.utils";

import Home from "./routes/home/home.component"
import Navbar from "./routes/navigation/navigation.component"
import Authentication from "./routes/authentication/authentication.component"
import Shop from "./routes/shop/shop.component"
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.reducer";

const App=()=> {
  const dispatch = useDispatch();

  useEffect(() => {
          const unsubscribe=onAuthStateChangedListener((user)=>{
              if(user) {
                  createUserDocumentFromAuth(user);
              }
              dispatch(setCurrentUser(user));            
          })
          return unsubscribe;
      },[])
  
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
