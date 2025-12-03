import React from "react";
import { Outlet } from "react-router-dom"; // <--- IMPORTANTE
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop.jsx"; // Si lo tienes

export const Layout = () => {
    return (
        <div>
            <ScrollToTop /> 
            
            <Navbar />
            
            <div className="container">
                <Outlet /> 
            </div>
            
            <Footer />
        </div>
    );
};