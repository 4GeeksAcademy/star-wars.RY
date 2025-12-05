import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <nav className="navbar navbar-light bg-light mb-3 px-4">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" 
                        style={{ height: "60px" }} 
                        alt="Star Wars Logo"
                    />
                </span>
            </Link>
            
            <div className="ml-auto d-flex align-items-center gap-2">
                <button 
                    className={`btn ${store.theme === "dark" ? "btn-outline-light" : "btn-outline-dark"}`}
                    onClick={() => dispatch({ type: "toggle_theme" })}
                >
                    {store.theme === "dark" ? (
                        <i className="fas fa-sun"></i>
                    ) : (
                        <i className="fas fa-moon"></i> 
                    )}
                </button>
                <div className="dropdown">
                    <button 
                        className="btn btn-primary dropdown-toggle d-flex align-items-center" 
                        type="button" 
                        id="dropdownMenuButton" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        Favorites 
                        <span className="badge bg-secondary ms-2">
                            {store.favorites.length}
                        </span>
                    </button>
                    
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        {store.favorites.length === 0 ? (
                            <li className="dropdown-item text-center">(Empty)</li>
                        ) : (
                            store.favorites.map((fav, index) => (
                                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                    <Link 
                                        to={`/single/${fav.type}/${fav.uid}`} 
                                        className="text-decoration-none text-dark"
                                    >
                                        {fav.name}
                                    </Link>
                                    
                                    <i 
                                        className="fas fa-trash-alt ms-2 text-danger" 
                                        style={{ cursor: "pointer" }}
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            dispatch({ type: "delete_favorite", payload: fav });
                                        }}
                                    ></i>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};