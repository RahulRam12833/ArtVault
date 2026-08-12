import {ProductCardContainer,Footer,Name,Price, ProductImageContainer} from './product-card.styles';
import Button,{BUTTON_TYPES} from '../button/button.component';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.reducer';

const ProductCard=({product})=>{
    const {name, imageUrl, price} = product;

    //const { addItemToCart } = useContext(CartContext);
    const dispatch = useDispatch();
    
    
    

    const addProductToCart = () => dispatch(addItemToCart(product));
    return(
        <ProductCardContainer>
            <ProductImageContainer>
            <img src={imageUrl} alt={`${name}`} loading="lazy"/>
            
            <Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>Add to Cart</Button>
            </ProductImageContainer>
            <Footer>
                <Name>{name}</Name>
                <Price>AUD${price}</Price>
            </Footer>
        </ProductCardContainer>
    )
}

export default ProductCard;