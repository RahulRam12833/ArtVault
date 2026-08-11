import {
  CategoryPreviewContainer,
  CategoryHeader,
  Title,
  Subtitle,
  Preview,
  ViewAll,
} from './category-preview.styles';
import { CategoryArrow,CategoryArrowWrapper } from '../directory/directory.styles';
import { motion } from 'motion/react';
import arrow from "../../assets/arrow.png"


const descriptions = {
  paintings: 'Works in paint and colour.',
  sculptures: 'Works shaped in three dimensions.',
  photography: 'Captured moments and perspectives.',
  digital: 'Art created beyond the canvas.',
  drawings: 'Studies in line, form and detail.',
};

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryHeader>

         <motion.h1
        initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false, amount: 0.4 }}
  transition={{ duration: 0.9,
    delay:0.2, ease: 'easeOut' }}
  
>
        
          <Title>{title}</Title>
          </motion.h1>
        

        <Subtitle>
          {descriptions[title]}
        </Subtitle>

        <ViewAll to={title}
  initial="initial"
  whileHover="hover">
          View collection
          <CategoryArrowWrapper
            variants={{
      initial: {
        width: 0,
        marginLeft: 0,
        opacity: 0,
      },
      hover: {
        width: 36,
        marginLeft: 12,
        opacity: 1,
      },
    }}
    transition={{
      duration: 0.3,
      ease: 'easeOut',
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
        </ViewAll>
      </CategoryHeader>

<motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
   whileInView={{ opacity: 1, y: 10 }}
    viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.5, ease: 'easeIn' }}>
      <Preview>
        <img
          src={products[0].imageUrl}
          alt={title}
          loading="lazy"
        />
      </Preview>
      </motion.div>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;