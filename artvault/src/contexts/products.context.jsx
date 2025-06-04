import { createContext, useState,useEffect} from "react";

import { addCollectionAndDocuments } from "../utilities/firebase/firebase.utils.js";


export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products,setProducts]=useState([]);



    const value = { products};
    
    return (
        <ProductsContext.Provider value={value}>
        {children}
        </ProductsContext.Provider>
    );
}