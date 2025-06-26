import {Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";


import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategories } from "../../store/categories/category.reducer"


const Shop=()=>{
  const dispatch=useDispatch(); 
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
      
  return (
   <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      
      
   </Routes>
    
  )
}

export default Shop;