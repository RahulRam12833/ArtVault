import './category-item.styles.scss';

const CategoryItem = ({ category}) => {
    return(
        <div  className='category-container'>
            
            <img src={category.imageUrl} alt={category.name} className='background-image' />
            <div className='category-body-container'>
              <h2>{category.name}</h2>
              <p>Shop Now</p>
            </div>
          </div>
    )
}

export default CategoryItem;