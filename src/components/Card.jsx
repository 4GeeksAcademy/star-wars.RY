import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({ item, type }) => {
    const { store, dispatch } = useGlobalReducer();

    // 1. Verificar si este item ya está en favoritos (para pintar el corazón)
    const isFavorite = store.favorites.some(fav => fav.uid === item.uid);

    // 2. Ajustar la URL de la imagen (la API dice 'people', la guía visual usa 'characters')
    const imgCategory = type === "people" ? "characters" : type;
    const imgUrl = `https://starwars-visualguide.com/assets/img/${imgCategory}/${item.uid}.jpg`;

    // 3. Función para manejar el clic en el corazón
    const handleFavoriteClick = () => {
        if (isFavorite) {
            // Si ya es favorito, lo eliminamos
            dispatch({ type: "delete_favorite", payload: item });
        } else {
            // Si no es favorito, lo agregamos (incluimos el tipo para usarlo luego en el Link del navbar)
            dispatch({ type: "add_favorite", payload: { ...item, type } });
        }
    };

    return (
        <div className="card mx-2" style={{ minWidth: "18rem" }}>
            <img 
                src={imgUrl} 
                className="card-img-top" 
                alt={item.name}
                // Si la imagen falla (pasa mucho con planetas), ponemos un placeholder
                onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
            />
            
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                    {/* Aquí puedes mostrar info extra si quisieras hacer otro fetch, 
                        por ahora dejaremos un texto genérico */}
                    A item from the Star Wars Universe.
                </p>
                
                <div className="d-flex justify-content-between">
                    {/* Botón para ir al detalle (Asegúrate que tu ruta en routes.jsx coincida con esto) */}
                    <Link to={`/single/${type}/${item.uid}`} className="btn btn-outline-primary">
                        Learn more!
                    </Link>

                    {/* Botón de Favoritos */}
                    <button 
                        className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`} 
                        onClick={handleFavoriteClick}
                    >
                        {/* Cambia el ícono si es favorito (Solid vs Outline) */}
                        <i className={`fa-heart ${isFavorite ? "fas" : "far"}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};