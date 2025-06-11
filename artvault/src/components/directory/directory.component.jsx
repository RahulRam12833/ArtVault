import {DirectoryContainer} from './directory.styles';
import CategoryItem from '../category-item/category-item-component';

const Directory = ({categories}) => {
    return (
        <DirectoryContainer>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
         ))}    
    </DirectoryContainer>
    )
}

export default Directory;