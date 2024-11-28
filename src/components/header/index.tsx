import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
    return (
        <>
            <header className="header">
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
                                    {/*<p className="text-sm absolute top-0 right-0 bg-red-500 text-white rounded-full px-1">*/}
                                    {/*    0*/}
                                    {/*</p>*/}
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
