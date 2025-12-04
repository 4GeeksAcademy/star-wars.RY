import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Card";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();

    const loadData = async () => {
        if (store.people.length === 0) {
            console.log("Cargando Personajes...");
            try {
                const resPeople = await fetch("https://www.swapi.tech/api/people/");
                const dataPeople = await resPeople.json();
                dispatch({ type: 'set_people', payload: dataPeople.results });
            } catch (error) {
                console.log("Error cargando personajes:", error);
            }
        }

        if (store.planets.length === 0) {
            console.log("Cargando Planetas...");
            try {
                const resPlanets = await fetch("https://www.swapi.tech/api/planets/");
                const dataPlanets = await resPlanets.json();
                dispatch({ type: 'set_planets', payload: dataPlanets.results });
            } catch (error) {
                console.log("Error cargando planetas:", error);
            }
        }
    }

    useEffect(() => {
        loadData();
    }, []); 

    return (
        <div className="container mt-5">
            <h1 className="text-danger mb-4">Characters</h1>
            <div className="d-flex overflow-auto mb-5" style={{ gap: "10px", paddingBottom: "20px" }}>
                {store.people.length === 0 ? (
                    <div className="alert alert-info">Cargando personajes o API no disponible...</div>
                ) : (
                    store.people.map((person) => (
                        <Card key={person.uid} item={person} type="people" />
                    ))
                )}
            </div>

            <h1 className="text-danger mb-4">Planets</h1>
            <div className="d-flex overflow-auto mb-5" style={{ gap: "10px", paddingBottom: "20px" }}>
                {store.planets.length === 0 ? (
                    <div className="alert alert-info">Cargando planetas...</div>
                ) : (
                    store.planets.map((planet) => (
                        <Card key={planet.uid} item={planet} type="planets" />
                    ))
                )}
            </div>

            <h1 className="text-danger mb-4 mt-5">Vehicles</h1>
            <div className="d-flex overflow-auto mb-5">
                {store.vehicles && store.vehicles.length > 0 ? (
                    store.vehicles.map((vehicle) => (
                        <Card key={vehicle.uid} item={vehicle} type="vehicles" />
                    ))
                ) : (
                    <div className="alert alert-info">Cargando vehículos...</div>
                )}
            </div>
        </div>
    );
};