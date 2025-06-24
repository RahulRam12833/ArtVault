import {CheckoutContainer,CheckoutHeader,HeaderBlock,TotalAmount} from './checkout.styles';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
const Checkout=()=> {


    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    if (cartItems.length === 0) {
        return (
            <CheckoutContainer>
                <h1>Your cart is empty</h1>
            </CheckoutContainer>
        );
    }
    return (
        <CheckoutContainer>
             <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => {
                return(
                    <CheckoutItem key={cartItem.id}
                        cartitem={cartItem}></CheckoutItem>
                )
                })}
            <TotalAmount>
                <span>Total Amount: ${cartTotal}</span>
            </TotalAmount>
        </CheckoutContainer>
    );
}

export default Checkout;