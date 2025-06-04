import { createContext,useEffect,useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    removeItemsFromCart: () => {},
    clearItemFromCart: () => {},
    cartTotal:0,
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

const removeCartItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === itemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === itemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
}

 
    
const cartItemsCount = (cartItems) => {
    return cartItems.reduce((total, cartItem) => total + (cartItem.quantity || 0), 0);
}


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal,setCartTotal]=useState(0)

    const addItemsToCart = (itemToAdd) => {
        setCartItems(addCartItem(cartItems, itemToAdd));
    }

    const removeItemsFromCart = (itemToRemove) => {
        setCartItems(removeCartItem(cartItems, itemToRemove));
    }

    const clearItemFromCart = (itemToClear) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemToClear.id));
    }

    useEffect(()=>{
        const newTotal=cartItems.reduce((total, cartItem) => total + (cartItem.quantity*cartItem.price), 0);
        setCartTotal(newTotal)
    },[cartItems])
    



    const value = { isCartOpen, setIsCartOpen, cartItems, addItemsToCart,removeItemsFromCart,clearItemFromCart,cartTotal,cartItemsCount:cartItemsCount(cartItems) };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}