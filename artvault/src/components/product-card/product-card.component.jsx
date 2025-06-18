import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {ProductCardContainer,Footer,Name,Price} from './product-card.styles';
import Button,{BUTTON_TYPES} from '../button/button.component';

const ProductCard=({product})=>{
    const {name, imageUrl, price} = product;

    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} loading="lazy"/>
            <Footer>
                <Name>{name}</Name>
                <Price>AUD${price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>Add to Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;