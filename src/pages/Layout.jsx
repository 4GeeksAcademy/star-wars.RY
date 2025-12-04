import React from "react";
import { Outlet } from "react-router-dom"; 
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop.jsx"; 

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