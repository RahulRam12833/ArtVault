import {CartIconContainer,ShoppingBag,ItemCount} from "./cart-icon.styles";
import shoppingbag from '/src/assets/shopping-bag.svg';
import { useContext } from "react";

import { useSelector,useDispatch } from "react-redux";
import { selectCartCount,selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";


const CartIcon=()=>{

    //const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const dispatch = useDispatch();
    

    const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    return(
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingBag src={shoppingbag} alt="Shopping Bag" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;