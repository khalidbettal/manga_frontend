import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Index";
import Footer from "../components/footer/Footer";
import ScroolTop from "../assets/tools/ScroolTop";

export const AppLayout = () => {
    
    return (
        <>
        <Navbar />
        <div className="bg-gray-900">
        <Outlet />
        </div>
        <Footer />
        <ScroolTop />
        </>
        
    );
};