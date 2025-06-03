import { ProductsContext } from "../../contexts/products.context";
import { useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';

const Shop=()=>{
  const { products } = useContext(ProductsContext);
  return (
    <>
      <h1>this is Shop</h1>
      <div className="products-container">
        {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
      </div>
    </>
  )
}

export default Shop;