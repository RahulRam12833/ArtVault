import {CartIconContainer,ShoppingBag,ItemCount} from "./cart-icon.styles";
import shoppingbag from '/src/assets/shopping-bag.svg';
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CartIcon=()=>{

    const { isCartOpen, setIsCartOpen,cartItemsCount } = useContext(CartContext);

    const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingBag src={shoppingbag} alt="Shopping Bag" />
            <ItemCount>{cartItemsCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;