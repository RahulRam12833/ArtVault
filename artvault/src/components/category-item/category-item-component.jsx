import { CategoryBodyContainer, CategoryItemContainer } from './category-item.styles';

const CategoryItem = ({ category}) => {
    return(
        <CategoryItemContainer>
            
            <img src={category.imageUrl} alt={category.name}  />
            <CategoryBodyContainer>
              <h2>{category.name}</h2>
              <p>Shop Now</p>
            </CategoryBodyContainer>
          </CategoryItemContainer>
    )
}

export default CategoryItem;