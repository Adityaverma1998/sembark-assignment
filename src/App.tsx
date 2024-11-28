import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ProductDetails from './pages/product-details';
import CartPage from './pages/cart';
import PageLayout from "./components/page-layout";
import {CartContextProvider} from "./context";

function App() {
    return (
        <CartContextProvider>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/product/:id" element={<ProductDetails />} />

                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
        </CartContextProvider>
    );
}

export default App;
