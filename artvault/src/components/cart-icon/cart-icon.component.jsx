import "./cart-icon.styles.scss";
import shoppingbag from '/src/assets/shopping-bag.svg';

const CartIcon=()=>{
    return(
        <div className="cart-icon-container">
            <img className="shopping-bag" src={shoppingbag} alt="Shopping Bag" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;