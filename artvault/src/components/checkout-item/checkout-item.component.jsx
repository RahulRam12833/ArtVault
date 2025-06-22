import {useSelector,useDispatch} from 'react-redux';
import { addItemToCart,removeItemFromCart,clearItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import {CheckoutItemContainer,ImageContainer,ItemDetails,Quantity,Arrow,Value,RemoveButton} from "./checkout-item.styles";

const CheckoutItem = ({ cartitem}) => {
    const { name, imageUrl, price, quantity } = cartitem;
    const dispatch = useDispatch();
    const cartItems=useSelector(selectCartItems)
   return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <ItemDetails>{name}</ItemDetails>
        <Quantity>
            <Arrow onClick={() => dispatch(removeItemFromCart(cartItems,cartitem))}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={() => dispatch(addItemToCart(cartItems,cartitem))}>&#10095;</Arrow>
        </Quantity>
        <ItemDetails>${price}</ItemDetails>
        <RemoveButton onClick={() => dispatch(clearItemFromCart(cartItems,cartitem))}>
            &#10005;
        </RemoveButton>
    </CheckoutItemContainer>
   )
}

export default CheckoutItem;