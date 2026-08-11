import {useNavigate} from 'react-router-dom';
import arrow from "../../assets/arrow.png"
import { CategoryRow,CategoryName,CategoryNumber,CategoryArrow,CategoryArrowWrapper } from '../directory/directory.styles';
import { motion } from 'motion/react';
const CategoryItem = ({ category,index}) => {
  const {name,route} = category;
  const navigate= useNavigate();

  const onNavigateHandler = () => navigate(route);
  
  return (
    <CategoryRow
      onClick={onNavigateHandler}
      whileHover="hover"
    >
      <CategoryName>{name}</CategoryName>

      <CategoryNumber>
        {String(index + 1).padStart(2, '0')}

        <CategoryArrowWrapper
  variants={{
    hover: {
      opacity: 1,
      width: 36,
    },
  }}
>
  <CategoryArrow
    src={arrow}
    alt=""
    initial={{ x: -36 }}
    variants={{
      hover: { x: 0 },
    }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
  />
</CategoryArrowWrapper>
      </CategoryNumber>
    </CategoryRow>
  );
};
export default CategoryItem;