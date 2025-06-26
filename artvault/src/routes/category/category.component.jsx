import { useParams } from 'react-router-dom';

import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import {selectCategoriesStatus} from '../../store/categories/category.selector'
import {CategoryContainer,CategoryTitle} from './category.styles';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

const Category = ()=> {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
    const status = useSelector(selectCategoriesStatus);

    
    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category, categoriesMap]);

    if (status === 'loading') {
        return <Spinner />;
    }
    if(status==='failed')
    {
        return <p>Something went wrong!!!</p>
    }

    return(
        <>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <CategoryContainer>
            {products &&
                products.map((product)=><ProductCard key={product.id} product={product} />)
            }
        </CategoryContainer>
        </>
    )
}

export default Category;
