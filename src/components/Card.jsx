import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({ item, type }) => {
    const { store, dispatch } = useGlobalReducer();
    const isFavorite = store.favorites.some(fav => fav.uid === item.uid);

    const imgUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${type}/${item.uid}.jpg`;

    // Placeholder por si acaso falla la imagen de GitHub
    const placeholderUrl = `https://placehold.co/400x600?text=${item.name}`;

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch({ type: "delete_favorite", payload: item });
        } else {
            dispatch({ type: "add_favorite", payload: { ...item, type } });
        }
    };

    return (
        <div className="card mx-2" style={{ minWidth: "18rem" }}>
            <img 
                src={imgUrl} 
                className="card-img-top" 
                alt={item.name}
                style={{ height: "400px", objectFit: "cover" }} 
                onError={(e) => {
                    e.target.src = placeholderUrl;
                }}
            />
            
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">A item from the Star Wars Universe.</p>
                
                <div className="d-flex justify-content-between">
                    <Link to={`/single/${type}/${item.uid}`} className="btn btn-outline-primary">
                        Learn more!
                    </Link>
                    <button 
                        className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`} 
                        onClick={handleFavoriteClick}
                    >
                        <i className={`fa-heart ${isFavorite ? "fas" : "far"}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};