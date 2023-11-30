import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Index";


export const AppLayout = () => {

    return (
        <>
        <Navbar />
        <div className="sm:mx-10">
        <Outlet />
        </div>
        </>
        
    );
};