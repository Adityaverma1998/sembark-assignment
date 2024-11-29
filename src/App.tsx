import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/home';
import ProductDetails from './pages/product-details';
import CartPage from './pages/cart';
import { CartContextProvider } from './context';
import { AnimatePresence } from 'framer-motion';
import Transition from './components/transition';

const AnimatedRoutes: React.FC = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <Transition>
                            <HomePage />
                        </Transition>
                    }
                />
                <Route
                    path="/product/:id"
                    element={
                        <Transition>
                            <ProductDetails />
                        </Transition>
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <Transition>
                            <CartPage />
                        </Transition>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

const App: React.FC = () => {
    return (
        <CartContextProvider>
            <Router>
                <AnimatedRoutes />
            </Router>
        </CartContextProvider>
    );
};

export default App;
