import './checkout.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
const Checkout=()=> {


    const { cartItems, 
        cartTotal} = useContext(CartContext);

    if (cartItems.length === 0) {
        return (
            <div className="checkout-container">
                <h1>Your cart is empty</h1>
            </div>
        );
    }
    return (
        <div className="checkout-container">
             <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
            </div>
            {cartItems.map((cartItem) => {
                return(
                    <CheckoutItem key={cartItem.id}
                        cartitem={cartItem}></CheckoutItem>
                )
                })}
            <div className="total-amount">
                <span>Total Amount: ${cartTotal}</span>
            </div>
        </div>
    );
}

export default Checkout;