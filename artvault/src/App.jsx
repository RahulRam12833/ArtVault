import { useState } from 'react'
import './categories.styles.scss'
import CategoryItem from './components/category-item/category-item-component'
import Category from './components/category/category.component'

const App=()=> {
  
  const categories=[
    {id:1, name: 'Paintings',imageUrl:'https://images.unsplash.com/photo-1533208087231-c3618eab623c'},
    {id: 2, name: 'Sculptures',imageUrl:'https://images.unsplash.com/photo-1574254706427-213d446e2f2b'},  
    {id: 3, name: 'Photography',imageUrl:'https://images.unsplash.com/photo-1603467928390-c4b320c8b0ea'},
    {id: 4, name: 'Digital Art',imageUrl:'https://images.unsplash.com/photo-1672239272089-250c32c3e2e2'},
    {id: 5, name: 'Drawings',imageUrl:'https://images.unsplash.com/photo-1711317092826-1e8173ea4a61'},
  ]  

  return (
    <>
    <Category categories={categories} />
    </>
  )
}

export default App
