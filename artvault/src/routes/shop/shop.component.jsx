import {Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";


import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategories } from "../../store/categories/category.reducer"
import { selectCategoriesStatus } from "../../store/categories/category.selector";

const Shop=()=>{
  const dispatch=useDispatch(); 
  const status=useSelector(selectCategoriesStatus)
  useEffect(() => {
    if(status==='idle')
      dispatch(fetchCategories());
  }, [status,dispatch]);
      
  return (
   <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      
      
   </Routes>
    
  )
}

export default Shop;