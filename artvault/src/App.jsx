import { useState } from 'react'
import './categories.styles.scss'

const App=()=> {
  
  const categories=[
    {id:1, name: 'Paintings'},
    {id: 2, name: 'Sculptures'},  
    {id: 3, name: 'Photography'},
    {id: 4, name: 'Digital Art'},
    {id: 5, name: 'Drawings'},
  ]

  return (
    <>
    <div className='categories-container'>
      {categories.map(({name}) => (
        <div className='category-container'>
            {/* <img/>*/}
            <div className='category-body-container'>
              <h2>{name}</h2>
              <p>Shop Now</p>
            </div>
          </div>
         ))}    
    </div>
    </>
  )
}

export default App
