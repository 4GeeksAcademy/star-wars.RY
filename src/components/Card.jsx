import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({ item, type }) => {
    const { store, dispatch } = useGlobalReducer();

    const isFavorite = store.favorites.some(fav => fav.uid === item.uid && fav.type === type);

    
    const imgUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${type}/${item.uid}.jpg`;
    
   
    const handleFavoriteClick = () => {
        const payload = { ...item, type };

        if (isFavorite) {
            dispatch({ type: "delete_favorite", payload });
        } else {
            dispatch({ type: "add_favorite", payload });
        }
    };

    return (
        <div className="card mx-2 border-0 shadow-sm" style={{ minWidth: "18rem" }}>
            <img 
                src={imgUrl} 
                className="card-img-top" 
                alt={item.name}
                style={{ height: "300px", objectFit: "cover", objectPosition: "top" }} 
            />
            
            <div className="card-body">
                <h5 className="card-title fw-bold text-dark">{item.name}</h5>
                <p className="card-text text-muted small">
                    A {type === "people" ? "character" : type.slice(0, -1)} from the Star Wars Universe.
                </p>
                
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <Link to={`/single/${type}/${item.uid}`} className="btn btn-outline-primary btn-sm">
                        Learn more!
                    </Link>
                    <button 
                        className={`btn btn-sm ${isFavorite ? "btn-warning" : "btn-outline-warning"}`} 
                        onClick={handleFavoriteClick}
                    >
                        <i className={`fa-heart ${isFavorite ? "fas" : "far"}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};