import React from "react";
import { Outlet } from "react-router-dom"; // <--- IMPORTANTE
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop.jsx"; // Si lo tienes

export const Layout = () => {
    return (
        <div>
            {/* ScrollToTop ayuda a que al cambiar de página suba al inicio */}
            <ScrollToTop /> 
            
            <Navbar />
            
            <div className="container">
                {/* Outlet renderiza lo que diga la ruta hija (Home o Single) */}
                <Outlet /> 
            </div>
            
            <Footer />
        </div>
    );
};