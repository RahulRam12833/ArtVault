import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartitem}) => {
    const { name, imageUrl, price, quantity } = cartitem;
     const { addItemsToCart,
            removeItemsFromCart,
            clearItemFromCart} = useContext(CartContext);
   
   return(
    <div className="checkout-item-container">
        <div className="image-container">
            <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItemsFromCart(cartitem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItemsToCart(cartitem)}>&#10095;</div>
        </span>
        <span className="price">${price}</span>
        <div className="remove-button" onClick={() => clearItemFromCart(cartitem)}>
            &#10005;
        </div>
    </div>
   )
}

export default CheckoutItem;