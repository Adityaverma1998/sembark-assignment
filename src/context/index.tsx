import React, {useState, ReactNode, useEffect} from 'react';
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
    const storedCart = localStorage.getItem('cart');
    const initialCart = storedCart ? JSON.parse(storedCart) : [];
    const [cart, setCart] = useState<CartItem[]>( initialCart);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]); // Only run when cart changes

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
