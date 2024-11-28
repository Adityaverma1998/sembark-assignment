import React, { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Explicitly typing the children prop
interface ToastProviderProps {
    children: ReactNode; // Explicit type for children
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    return (
        <>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                className="toast-container"
            />
        </>
    );
};

export default ToastProvider;
