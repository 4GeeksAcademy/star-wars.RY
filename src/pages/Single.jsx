import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Single = () => {
    const { type, uid } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadDetails = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
                if (!response.ok) throw new Error("Error en la API");
                const data = await response.json();
                setDetails(data.result.properties);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false); 
            }
        };

        loadDetails();
    }, [type, uid]); 

    const imgUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${type}/${uid}.jpg`;
    const placeholderUrl = `https://placehold.co/600x400?text=${details ? details.name : 'Not Found'}`;

    if (loading) return <div className="container text-center mt-5"><h1>Loading details...</h1></div>;
    if (error || !details) return <div className="container text-center mt-5"><h1 className="text-danger">Error loading data or Item not found.</h1></div>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 text-center">
                    <img 
                        src={imgUrl}
                        className="img-fluid rounded shadow-lg mb-4"
                        alt={details.name}
                        style={{ maxHeight: "500px", objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="display-4 fw-bold">{details.name}</h1>
                    <p className="lead mt-4">
                        A prominent entity within the Star Wars universe. This record contains specific details retrieved from the galactic archives.
                    </p>
                </div>
            </div>

            <hr className="my-5 text-danger" style={{ height: "3px", opacity: 0.5 }} />

            <div className="row text-center text-danger">
                
                {type === "people" && (
                    <>
                        <div className="col-md-2 mb-3">
                            <strong>Gender:</strong><br />{details.gender}
                        </div>
                        <div className="col-md-2 mb-3">
                            <strong>Birth Year:</strong><br />{details.birth_year}
                        </div>
                        <div className="col-md-2 mb-3">
                            <strong>Height:</strong><br />{details.height} cm
                        </div>
                        <div className="col-md-2 mb-3">
                            <strong>Mass:</strong><br />{details.mass} kg
                        </div>
                        <div className="col-md-2 mb-3">
                            <strong>Eye Color:</strong><br />{details.eye_color}
                        </div>
                        <div className="col-md-2 mb-3">
                            <strong>Hair Color:</strong><br />{details.hair_color}
                        </div>
                    </>
                )}

                {type === "planets" && (
                    <>
                        <div className="col-md-2 mb-3">
                            <strong>Climate:</strong><br />{details.climate}
                        </div>
                        <div className="col-md-2 mb-3">
                            <strong>Terrain:</strong><br />{details.terrain}
                        </div>
                        <div className="col-md-2 mb-3">
                            <strong>Diameter:</strong><br />{details.diameter} km
                        </div>
                        <div className="col-md-2 mb-3">
                            <strong>Gravity:</strong><br />{details.gravity}
                        </div>
                        <div className="col-md-2 mb-3">
                            <strong>Population:</strong><br />{details.population}
                        </div>
                        <div className="col-md-2 mb-3">
                            <strong>Orbital Period:</strong><br />{details.orbital_period} days
                        </div>
                    </>
                )}

                {type === "vehicles" && (
                    <>
                        <div className="col-md-3 mb-3">
                            <strong>Model:</strong><br />{details.model}
                        </div>
                        <div className="col-md-3 mb-3">
                            <strong>Class:</strong><br />{details.vehicle_class}
                        </div>
                        <div className="col-md-3 mb-3">
                            <strong>Manufacturer:</strong><br />{details.manufacturer}
                        </div>
                        <div className="col-md-3 mb-3">
                            <strong>Cost:</strong><br />{details.cost_in_credits} credits
                        </div>
                    </>
                )}

            </div>
            <div className="text-center mt-5 mb-5">
                <Link to="/">
                    <span className="btn btn-primary btn-lg" role="button">
                        Back home
                    </span>
                </Link>
            </div>
        </div>
    );
};