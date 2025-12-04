import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Single = () => {
    const { store } = useGlobalReducer();
    const { type, uid } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (store[type]) {
            const found = store[type].find(element => element.uid === uid);
            setItem(found);
        }
    }, [store, type, uid]);

    const imgUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${type}/${uid}.jpg`;

    return (
        <div className="container mt-5 text-center">
            {item ? (
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <img 
                            src={imgUrl}
                            className="img-fluid mb-4 rounded shadow"
                            alt={item.name}
                            style={{ maxHeight: "250px" }}
                            onError={(e) => e.target.src = `https://placehold.co/600x400?text=${item.name}`}
                        />
                        
                        <h1 className="display-4 text-danger">{item.name}</h1>
                        <hr className="my-4" />
                        
                        <p className="lead">
                            Description of {item.name} from the {type} category.
                        </p>

                        <Link to="/">
                            <span className="btn btn-primary btn-lg" role="button">
                                Back home
                            </span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="alert alert-warning">
                    Loading... (Type: {type}, UID: {uid})
                </div>
            )}
        </div>
    );
};