import { Link } from "react-router-dom";
import { useGlobalContext } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

export const Home = () => {
    const { store, actions } = useGlobalContext();

    const CardSection = ({ title, data, type }) => (
        <div className="mb-5 px-4">
            <h2 className="text-danger mb-4 fw-bold">{title}</h2>
            <div className="d-flex overflow-auto pb-4 gap-4" style={{ scrollbarWidth: 'none' }}>
                {data.map((item) => {
                    const isFav = store.favorites.some(f => f.uid === item.uid);
                    const guideType = type === 'people' ? 'characters' : type;

                    return (
                        <div key={item.uid} className="card flex-shrink-0" style={{ width: "18rem" }}>
                            <div style={{ height: '200px', overflow: 'hidden' }} className="bg-secondary">
                                <img 
                                    src={`https://starwars-visualguide.com/assets/img/${guideType}/${item.uid}.jpg`} 
                                    className="card-img-top h-100 w-100" 
                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                    alt={item.name}
                                    onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">{item.name}</h5>
                                <div className="d-flex justify-content-between mt-3">
                                    <Link to={`/single/${type}/${item.uid}`} className="btn btn-outline-primary">
                                        Learn more!
                                    </Link>
                                    <button 
                                        className={`btn ${isFav ? 'btn-warning' : 'btn-outline-warning'}`}
                                        onClick={() => actions.addFavorite({...item, type})}
                                    >
                                        <FontAwesomeIcon icon={isFav ? faHeartSolid : faHeartRegular} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    if (store.loading) return <div className="text-center mt-5">Loading Force...</div>;

    return (
        <div className="container-fluid py-4">
            <CardSection title="Characters" data={store.people} type="people" />
            <CardSection title="Planets" data={store.planets} type="planets" />
            <CardSection title="Vehicles" data={store.vehicles} type="vehicles" />
        </div>
    );
};