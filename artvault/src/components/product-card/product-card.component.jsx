import {ProductCardContainer,Footer,Name,Price} from './product-card.styles';
import Button,{BUTTON_TYPES} from '../button/button.component';
import { useDispatch,useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard=({product})=>{
    const {name, imageUrl, price} = product;

    //const { addItemToCart } = useContext(CartContext);
    const dispatch = useDispatch();
    
    
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems,product));
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