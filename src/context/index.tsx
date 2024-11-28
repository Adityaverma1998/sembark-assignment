import React, {useState, ReactNode, useEffect} from 'react';
import { CartContextType, CartItem } from '../interface';

// Default value for the context
const defaultValue: CartContextType = {
    cart: [],
    addToCart: (item: CartItem) => {},
    removeFromCart: (id: string) => {},
    cartItemsQuantityDecrement: (id: string) => {},
    cartItemsQuantityIncrement: (id: string) => {},
};

// Create the CartContext
const CartContext = React.createContext<CartContextType>(defaultValue);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const storedCart = localStorage.getItem('cart');
    const initialCart = storedCart ? JSON.parse(storedCart) : [];
    const [cart, setCart] = useState<CartItem[]>( initialCart);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => [...prevCart, item]);
    };
    const cartItemsQuantityIncrement =(id:string)=>{
        const filterCartItem = cart.filter((item,index)=>item.id===String(id))
        if(filterCartItem){
            addToCart({...filterCartItem[0],quantity: filterCartItem[0].quantity + 1})
        }
    }
    const cartItemsQuantityDecrement =(id:string)=>{
        const filterCartItem = cart.filter((item,index)=>item.id===String(id))
        if(filterCartItem){
            addToCart({...filterCartItem[0],quantity: filterCartItem[0].quantity - 1})
        }
    }

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,cartItemsQuantityIncrement,cartItemsQuantityDecrement }}>
    {children}
    </CartContext.Provider>
);
};

export { CartContext, CartContextProvider };
