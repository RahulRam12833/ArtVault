import Shop_DATA from '../../shop-data.json'

const Shop=()=>{
  return (
    <>
      <h1>this is Shop</h1>
      {Shop_DATA.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.imageUrl} alt={item.title} />
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </>
  )
}

export default Shop;