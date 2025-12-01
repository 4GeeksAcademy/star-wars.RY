import { Link } from "react-router-dom";
import { useGlobalContext } from "../store";
import { useState } from "react";

export const Navbar = () => {
    const { store, actions } = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-light bg-light mb-3 px-4 py-3 border-bottom">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link to="/">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" 
                        alt="Star Wars" 
                        style={{ height: '50px', objectFit: 'contain' }}
                    />
                </Link>
                
                <div className="dropdown" style={{ position: 'relative' }}>
                    <button 
                        className="btn btn-primary dropdown-toggle d-flex align-items-center gap-2"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Favorites 
                        <span className="badge bg-secondary text-white">{store.favorites.length}</span>
                    </button>
                    
                    {isOpen && (
                        <ul className="dropdown-menu show" style={{ 
                            display: 'block', 
                            position: 'absolute', 
                            right: 0, 
                            left: 'auto',
                            minWidth: '200px',
                            zIndex: 1000 
                        }}>
                            {store.favorites.length === 0 ? (
                                <li className="dropdown-item text-muted text-center">(Empty)</li>
                            ) : (
                                store.favorites.map((fav) => (
                                    <li key={fav.uid} className="dropdown-item d-flex justify-content-between align-items-center">
                                        <Link 
                                            to={`/single/${fav.type}/${fav.uid}`} 
                                            className="text-decoration-none text-dark text-truncate me-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {fav.name}
                                        </Link>
                                        <span 
                                            style={{ cursor: 'pointer' }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                actions.removeFavorite(fav.uid);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faTrash} className="text-danger" />
                                        </span>
                                    </li>
                                ))
                            )}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};