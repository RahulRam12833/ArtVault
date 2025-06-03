import { createContext,useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
})

const addCartItem = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === itemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === itemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
}

const cartItemsCount = (cartItems) => {
    return cartItems.reduce((total, cartItem) => total + (cartItem.quantity || 0), 0);
}
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemsToCart = (itemToAdd) => {
        setCartItems(addCartItem(cartItems, itemToAdd));
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemsToCart,cartItemsCount:cartItemsCount(cartItems) };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}