import {useNavigate} from 'react-router-dom';

import { CategoryBodyContainer, CategoryItemContainer } from './category-item.styles';

const CategoryItem = ({ category}) => {
  const {imageUrl,name,route} = category;
  const navigate= useNavigate();

  const onNavigateHandler = () => navigate(route);
    return(
        <CategoryItemContainer onClick={onNavigateHandler}>
            <img src={imageUrl} alt={name}  />
            <CategoryBodyContainer>
              <h2>{name}</h2>
              <p>Shop Now</p>
            </CategoryBodyContainer>
          </CategoryItemContainer>
    )
}

export default CategoryItem;