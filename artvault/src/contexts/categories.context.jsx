import { createContext, useState,useEffect} from "react";

import { getCategoriesandDocs } from "../utilities/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap,setCategoriesMap]=useState({});

    useEffect(()=>{
      const getCategoriesMap=async()=>{
        const categoryMap=await getCategoriesandDocs();
        setCategoriesMap(categoryMap)
      }
      getCategoriesMap()
    },[])

    const value = {categoriesMap};
    
    return (
        <CategoriesContext.Provider value={value}>
        {children}
        </CategoriesContext.Provider>
    );
}