import {CartIconContainer,ShoppingBag,ItemCount} from "./cart-icon.styles";
import shoppingbag from '/src/assets/shopping-bag.svg';
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CartIcon=()=>{

    const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext);

    const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingBag src={shoppingbag} alt="Shopping Bag" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;