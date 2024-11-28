import { Outlet } from 'react-router-dom';
import Header from "../header";
import Footer from "../footer";

// @ts-ignore
const PageLayout = ({children}) => {
    return (
        <div className="page-layout">
            <Header />

            <main className="content-area w-full">
                {children}
            </main>

            <Footer/>
        </div>
    );
};

export default PageLayout;
