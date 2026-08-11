import {useNavigate} from 'react-router-dom';

import { CategoryRow,CategoryName,CategoryNumber } from '../directory/directory.styles';

const CategoryItem = ({ category,index}) => {
  const {name,route} = category;
  const navigate= useNavigate();

  const onNavigateHandler = () => navigate(route);
  
    return(
        <CategoryRow onClick={onNavigateHandler}>
           <CategoryName>{name}</CategoryName>

           <CategoryNumber>
            {String(index+1).padStart(2,'0')}
           </CategoryNumber>
          </CategoryRow>
    )
}

export default CategoryItem;