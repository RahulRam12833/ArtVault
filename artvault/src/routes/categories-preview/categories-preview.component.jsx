import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

import {selectCategoriesStatus} from "../../store/categories/category.selector"
const CategoriesPreview=()=>{
  const categoriesMap = useSelector(selectCategoriesMap);
  const status = useSelector(selectCategoriesStatus);

  if (status === 'loading') {
    return <Spinner />;
  }
  if(status==='failed')
  {
    return <p>Something went wrong!!!</p>
  }
  return (
    <>    
      {
        Object.keys(categoriesMap).map((title)=>{
          const products=categoriesMap[title];
          return (
          <CategoryPreview key={title} title={title} products={products}/>
          )
        }) 
      }
    </>
    
  )
}

export default CategoriesPreview;