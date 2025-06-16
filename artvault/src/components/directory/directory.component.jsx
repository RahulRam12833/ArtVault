import {DirectoryContainer} from './directory.styles';
import CategoryItem from '../category-item/category-item-component';

const categories=[
    {id:1, name: 'Paintings',imageUrl:'https://images.unsplash.com/photo-1533208087231-c3618eab623c',route:'shop/paintings'},
    {id: 2, name: 'Sculptures',imageUrl:'https://images.unsplash.com/photo-1574254706427-213d446e2f2b',route:'shop/sculptures'},  
    {id: 3, name: 'Photography',imageUrl:'https://images.unsplash.com/photo-1603467928390-c4b320c8b0ea',route:'shop/photography'},
    {id: 4, name: 'Digital Art',imageUrl:'https://images.unsplash.com/photo-1672239272089-250c32c3e2e2',route:'shop/digital'},
    {id: 5, name: 'Drawings',imageUrl:'https://images.unsplash.com/photo-1711317092826-1e8173ea4a61',route:'shop/drawings'},
]  

const Directory = () => {
    return (
        <DirectoryContainer>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
         ))}    
    </DirectoryContainer>
    )
}

export default Directory;