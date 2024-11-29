import React, { useState, ReactNode, useEffect } from 'react';
import { CartContextType, CartItem } from '../interface';

// Default value for the context
const defaultValue: CartContextType = {
    cart: [],
    addToCart: (item: CartItem) => {},
    removeFromCart: (id: string) => {},
    cartItemsQuantityDecrement: (id: string) => {},
    cartItemsQuantityIncrement: (id: string) => {},
    filter: "",
    setFilter: (filter: string) => {},
    sortOrder: "asc",
    setSortOrder: (order: string) => {},
};

// Create the CartContext
const CartContext = React.createContext<CartContextType>(defaultValue);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const storedCart = localStorage.getItem('cart');
    const initialCart = storedCart ? JSON.parse(storedCart) : [];
    const [cart, setCart] = useState<CartItem[]>(initialCart);

    // Load filter and sortOrder from localStorage
    const storedFilter = localStorage.getItem('filter');
    const storedSortOrder = localStorage.getItem('sortOrder');
    const [filter, setFilter] = useState<string>(storedFilter || "");
    const [sortOrder, setSortOrder] = useState<string>(storedSortOrder || "asc");

    useEffect(() => {
        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Save filter and sortOrder to localStorage
        localStorage.setItem('filter', filter);
        localStorage.setItem('sortOrder', sortOrder);
    }, [cart, filter, sortOrder]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    const cartItemsQuantityIncrement = (id: string) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const cartItemsQuantityDecrement = (id: string) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Function to update the filter
    const updateFilter = (newFilter: string) => {
        setFilter(newFilter);
    };

    // Function to update the sort order
    const updateSortOrder = (newSortOrder: string) => {
        setSortOrder(newSortOrder);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                cartItemsQuantityIncrement,
                cartItemsQuantityDecrement,
                filter,
                setFilter: updateFilter,
                sortOrder,
                setSortOrder: updateSortOrder,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };
