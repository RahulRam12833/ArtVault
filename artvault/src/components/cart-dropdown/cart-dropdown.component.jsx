import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {CartDropdownContainer,CartItems,EmptyMessage} from './cart-dropdown.styles';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer>
        <CartItems>
            {cartItems.length ? (
                cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))
            ) : (
                <EmptyMessage>Your cart is empty</EmptyMessage>
            )}
        </CartItems>
        <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;