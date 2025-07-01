import {CartItemContainer,ItemDetails,ImageContainer} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    
    return (
        <CartItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <ItemDetails>
            <span >{name}</span>
            <span >
            {quantity} x ${price}
            </span>
        </ItemDetails>
        </CartItemContainer>
    );
    }

export default CartItem;