import { Outlet } from 'react-router-dom';
import Header from "../header";
import Footer from "../footer";
import ToastProvider from "../toast-message";

// @ts-ignore
const PageLayout = ({children}) => {
    return (
        <div className="page-layout">

            <Header />
            <ToastProvider>
                <main className="content-area w-full px-8">
                    {children}
                </main>
            </ToastProvider>


            <Footer/>
        </div>
    );
};

export default PageLayout;
