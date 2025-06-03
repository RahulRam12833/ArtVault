import {Routes, Route} from "react-router-dom"
import Home from "./routes/home/home.component"
import Navbar from "./routes/navigation/navigation.component"
import Authentication from "./routes/authentication/authentication.component"



const Shop=()=>{
  return <h1>this is Shop</h1>
}

const App=()=> {
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />}/>
          <Route path='auth' element={<Authentication />}/>
          <Route path="shop" element={<Shop/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
