import React from 'react';
import { Link } from 'react-router-dom';

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
                            <Link to="/cart" className="nav-link">Cart</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
