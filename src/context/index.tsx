import React, { useState, ReactNode } from 'react';
import { CartContextType, CartItem } from '../interface';

// Default value for the context
const defaultValue: CartContextType = {
    cart: [],
    addToCart: (item: CartItem) => {},
    removeFromCart: (id: string) => {},
};

// Create the CartContext
const CartContext = React.createContext<CartContextType>(defaultValue);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
    {children}
    </CartContext.Provider>
);
};

export { CartContext, CartContextProvider };
