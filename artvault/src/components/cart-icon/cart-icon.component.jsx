import "./cart-icon.styles.scss";
import shoppingbag from '/src/assets/shopping-bag.svg';
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CartIcon=()=>{

    const { isCartOpen, setIsCartOpen,cartItemsCount } = useContext(CartContext);

    const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <div className="cart-icon-container" onClick={toggleCartOpen}>
            <img className="shopping-bag" src={shoppingbag} alt="Shopping Bag" />
            <span className="item-count">{cartItemsCount}</span>
        </div>
    )
}

export default CartIcon;