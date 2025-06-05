import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './product-card.styles.scss';
import Button from '../button/button.component';

const ProductCard=({product})=>{
    const {name, imageUrl, price} = product;

    const { addItemsToCart } = useContext(CartContext);
    const addProductToCart = () => addItemsToCart(product);
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} loading="lazy"/>
            <div className='product-details'>
                <span className='product-name'>{name}</span>
                <span className='product-price'>AUD${price}</span>
            </div>
            
            <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard;