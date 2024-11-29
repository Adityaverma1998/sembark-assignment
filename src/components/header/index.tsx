import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../context';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const cartContext = useContext(CartContext);
    const { cart } = cartContext;
    const [prevCartLength, setPrevCartLength] = useState(cart.length);

    useEffect(() => {
        setPrevCartLength(cart.length);
    }, [cart.length]);

    return (
        <>
            <header className="header flex justify-between items-center py-4 bg-gray-100 shadow-md px-2 md:px-4 lg:px-8">
                <div className="logo">
                    <h1>Sembark</h1>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item pr-1 md:pr-0">
                            <Link to="/cart" className="nav-link">
                                <div className="relative inline-block">
                                    <ShoppingCartIcon fontSize="medium" />
                                    <AnimatePresence>
                                        {cart.length > 0 && (
                                            <motion.p
                                                key={cart.length}
                                                className="text-sm absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1"
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.5, opacity: 0 }}
                                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            >
                                                {cart.length}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
