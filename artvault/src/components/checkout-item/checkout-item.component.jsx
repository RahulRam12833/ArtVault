import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

import {CheckoutItemContainer,ImageContainer,ItemDetails,Quantity,Arrow,Value,RemoveButton} from "./checkout-item.styles";

const CheckoutItem = ({ cartitem}) => {
    const { name, imageUrl, price, quantity } = cartitem;
     const { addItemToCart,
            removeItemFromCart,
            clearItemFromCart} = useContext(CartContext);
   
   return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <ItemDetails>{name}</ItemDetails>
        <Quantity>
            <Arrow onClick={() => removeItemFromCart(cartitem)}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={() => addItemToCart(cartitem)}>&#10095;</Arrow>
        </Quantity>
        <ItemDetails>${price}</ItemDetails>
        <RemoveButton onClick={() => clearItemFromCart(cartitem)}>
            &#10005;
        </RemoveButton>
    </CheckoutItemContainer>
   )
}

export default CheckoutItem;