import React, { useEffect } from "react"; 
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import useGlobalReducer from "../hooks/useGlobalReducer"; 

export const Layout = () => {
    const { store } = useGlobalReducer();
    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", store.theme);
        
        if (store.theme === "dark") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [store.theme]);

    return (
        <div className="d-flex flex-column min-vh-100">
            <ScrollToTop />
            <Navbar />
            <div className="container flex-grow-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};