import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {CartContext} from "../../context";
const Header = () => {
    const cartContext = useContext(CartContext);
    const {cart} = cartContext;
    return (
        <>
            <header className="header flex justify-between items-center py-4  bg-gray-100 shadow-md px-2 md:px-8 ">
                <div className="logo">
                    <h1>Sembark</h1>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                <div className="relative inline-block">
                                    <ShoppingCartIcon fontSize="medium"/>
                                    <p
                                        className={`text-sm absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 ${cart.length === 0 ? "hidden" : ""}`}
                                    >
                                        {cart.length}
                                    </p>
                                </div>
                            </Link>
                        </li>


                    </ul>
                </nav>
            </header>
        </>
    )
        ;
};

export default Header;
