import {useDispatch} from 'react-redux';
import { addItemToCart,removeItemFromCart,clearItemFromCart } from '../../store/cart/cart.reducer';
import {CheckoutItemContainer,ImageContainer,ItemDetails,Quantity,Arrow,Value,RemoveButton} from "./checkout-item.styles";

const CheckoutItem = ({ cartitem}) => {
    const { name, imageUrl, price, quantity } = cartitem;
    const dispatch = useDispatch();
    
   return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <ItemDetails>{name}</ItemDetails>
        <Quantity>
            <Arrow onClick={() => dispatch(removeItemFromCart(cartitem))}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={() => dispatch(addItemToCart(cartitem))}>&#10095;</Arrow>
        </Quantity>
        <ItemDetails>${price}</ItemDetails>
        <RemoveButton onClick={() => dispatch(clearItemFromCart(cartitem))}>
            &#10005;
        </RemoveButton>
    </CheckoutItemContainer>
   )
}

export default CheckoutItem;