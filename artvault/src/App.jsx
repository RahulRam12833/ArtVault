import {Routes, Route} from "react-router-dom"
import Home from "./routes/home/home.component"
import Navbar from "./routes/navigation/navigation.component"
import SignIn from "./routes/sign-in/sign-in.component"



const Shop=()=>{
  return <h1>this is Shop</h1>
}

const App=()=> {
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />}/>
          <Route path='signIn' element={<SignIn />}/>
          <Route path="shop" element={<Shop/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
