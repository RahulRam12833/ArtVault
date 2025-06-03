import { ProductsContext } from "../../contexts/products.context";
import { useContext } from "react";

const Shop=()=>{
  const { products } = useContext(ProductsContext);
  return (
    <>
      <h1>this is Shop</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          </div>
      ))}
    </>
  )
}

export default Shop;