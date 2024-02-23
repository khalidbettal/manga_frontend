import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Index";
import Footer from "../components/footer/Footer";
import ScroolTop from "../assets/tools/ScroolTop";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/auth/authSlice";

export const AppLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    })

    const userData = useSelector((state: any) => state.auth.user);
    return (
        <>
        <Navbar email={userData?.email} />
        <div className="bg-gray-900">
        <Outlet  />
        </div>
        <Footer />
         <ScroolTop />
        </>
        
    );
};