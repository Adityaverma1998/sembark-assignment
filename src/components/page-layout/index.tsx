import { Outlet } from 'react-router-dom';
import Header from "../header";
import Footer from "../footer";
import ToastProvider from "../toast-message";

// @ts-ignore
const PageLayout = ({ children }) => {
    return (
        <div className="page-layout flex flex-col min-h-screen">
            <Header />

            <ToastProvider>
                <main className="flex-grow w-full px-2 md:px-4">
                    {children}
                    <Outlet />
                </main>
            </ToastProvider>

            <Footer />
        </div>
    );
};

export default PageLayout;
